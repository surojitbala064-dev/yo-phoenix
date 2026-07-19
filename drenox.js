const baileys = require('@whiskeysockets/baileys')
const { 
  default: makeWASocket,
  proto, 
  jidNormalizedUser, 
  generateWAMessage, 
  generateWAMessageFromContent,
  generateWAMessageContent,  
  getContentType, 
  prepareWAMessageMedia,
  downloadContentFromMessage
} = baileys

const fs = require('fs')
const path = require('path')
const util = require('util')
const chalk = require('chalk')
const axios = require('axios')
const os = require('os')
const moment = require('moment-timezone')
const { exec } = require('child_process')
const googleTTS = require('google-tts-api')
const yts = require('yt-search')
const ytdl = require('@distube/ytdl-core')
const GROQ_API_KEY = ''; // REMOVED FOR SECURITY 
//const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const { writeExif, imageToWebp, videoToWebp, writeExifImg, writeExifVid, addExif } = require('./allfunc/exif');

const API_KEY = 'free_key@maher_apis';
const API_BASE = 'https://api.nexoracle.com/stalking';

const NEXORACLE_API = 'https://api.nexoracle.com/';
const NEXORACLE_KEY = 'free_key@maher_apis&q';

// Download media helper
async function downloadMedia(message, type) {
    try {
        const buffer = await bad.downloadMediaMessage(message)
        return buffer
    } catch (error) {
        console.error(`Failed to download ${type}:`, error)
        return null
    }
}
// ═══════════════════════════════════════════════════════════
// CACHE MAPS & STORAGE
// ═══════════════════════════════════════════════════════════
const { getSetting, setSetting } = require("./Settings.js")
const groupCache = new Map(); // Cache group metadata
const groupMetadataCache = new Map();
const loadingAnimations = new Map()
//const groupMetadata = m.isGroup ? await bad.groupMetadata(from).catch(e => {}) : 
 
// ═══════════════════════════════════════════════════════════
// GLOBAL VARIABLES INITIALIZATION
// ═══════════════════════════════════════════════════════════
global.autoViewStatus = global.autoViewStatus ?? true
global.autoLikeStatus = global.autoLikeStatus ?? true
global.autoread = global.autoread ?? false
global.autobio = global.autobio ?? false
global.autoTyping = global.autoTyping ?? false
global.autoRecording = global.autoRecording ?? false
global.autoPresence = global.autoPresence ?? 'off'
global.autoReply = global.autoReply ?? false


const afkUsers = {}
global.antiBadwordGroups = new Set()
global.antibot = new Set()

global.antilinkGroups = new Set()
global.antibill = new Set()
global.billWarnings = {}
global.antilinkWarned = new Set()
global.antibillWarned = new Set()

if (!global.deletedMessages) global.deletedMessages = new Map()
if (!global.welcomeGroups) global.welcomeGroups = new Set()
if (!global.goodbyeGroups) global.goodbyeGroups = new Set()
if (!global.chatbotData) {
  global.chatbotData = new Map() // Stores conversation history per user
}
if (!global.chatbot) {
  global.chatbot = new Set() // Stores groups where chatbot is enabled
}

const processedStatuses = new Set()
const activePresence = new Map()
const autoReplyCache = new Map()
const chatbotCache = new Map()

if (!global.tictactoeGames) global.tictactoeGames = new Map()
if (!global.wordChainGames) global.wordChainGames = new Map()
if (!global.deletedMessages) global.deletedMessages = new Map()
if (!global.deletedMediaCache) global.deletedMediaCache = new Map()
if (!global.protectedAdmins) global.protectedAdmins = {}
if (!global.prefixSettings) global.prefixSettings = {}
if (!global.userMoods) global.userMoods = {}
if (!global.warns) global.warns = {}
if (!global.antiDeleteGroups) global.antiDeleteGroups = new Set()
