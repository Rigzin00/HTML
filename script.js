// Video data
const videos = [
    {
      id: 1,
      thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
      channelPicture: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&q=80",
      title: "Talking Tech and AI with Google CEO Sundar Pichai!",
      channelName: "Marques Brownlee",
      views: "3.4M views",
      timestamp: "6 months ago"
    },
    {
      id: 2,
      thumbnail: "https://images.unsplash.com/photo-1517404215738-15263e9f9178?w=800&q=80",
      channelPicture: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&q=80",
      title: "Try Not To Laugh Challenge #9",
      channelName: "Markiplier",
      views: "19M views",
      timestamp: "4 years ago"
    },
    {
      id: 3,
      thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
      channelPicture: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
      title: "Crazy Tik Toks Taken Moments Before DISASTER",
      channelName: "SSSniperWolf",
      views: "12M views",
      timestamp: "1 year ago"
    },
    {
      id: 4,
      thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
      channelPicture: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&q=80",
      title: "The Simplest Math Problem No One Can Solve - Collatz Conjecture",
      channelName: "Veritasium",
      views: "18M views",
      timestamp: "4 months ago"
    },
    {
      id: 5,
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
      channelPicture: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80",
      title: "Kadane's Algorithm to Maximum Sum Subarray Problem",
      channelName: "CS Dojo",
      views: "519K views",
      timestamp: "5 years ago"
    },
    {
      id: 6,
      thumbnail: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
      channelPicture: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=100&q=80",
      title: "Anything You Can Fit In The Circle I'll Pay For",
      channelName: "MrBeast",
      views: "141M views",
      timestamp: "1 year ago"
    },
    {
      id: 7,
      thumbnail: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800&q=80",
      channelPicture: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=100&q=80",
      title: "Why Planes Don't Fly Over Tibet",
      channelName: "RealLifeLore",
      views: "6.6M views",
      timestamp: "1 year ago"
    },
    {
      id: 8,
      thumbnail: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
      channelPicture: "https://images.unsplash.com/photo-1557862921-37829c790f19?w=100&q=80",
      title: "Inside The World's Biggest Passenger Plane",
      channelName: "Tech Vision",
      views: "3.7M views",
      timestamp: "10 months ago"
    },
    {
      id: 9,
      thumbnail: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
      channelPicture: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
      title: "The SECRET to Super Human STRENGTH",
      channelName: "ThenX",
      views: "20M views",
      timestamp: "3 years ago"
    },
    {
      id: 10,
      thumbnail: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      channelPicture: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80",
      title: "How The World's Largest Cruise Ship Makes 30,000 Meals Every Day",
      channelName: "Business Insider",
      views: "14M views",
      timestamp: "1 year ago"
    },
    {
      id: 11,
      thumbnail: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
      channelPicture: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80",
      title: "Dubai's Crazy Underwater Train and Other Things #Only in Dubai",
      channelName: "Destination Tips",
      views: "3M views",
      timestamp: "1 year ago"
    },
    {
      id: 12,
      thumbnail: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&q=80",
      channelPicture: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80",
      title: "What Would Happen If You Didn't Drink Water? - Mia Nacamulli",
      channelName: "TED-Ed",
      views: "12M views",
      timestamp: "5 years ago"
    }
  ];
  
  // Function to create a video card element
  function createVideoCard(video) {
    return `
      <div class="video-preview">
        <div class="thumbnail-container">
          <img 
            src="${video.thumbnail}" 
            alt="${video.title}"
            class="thumbnail"
          />
        </div>
        <div class="video-info">
          <img 
            src="${video.channelPicture}" 
            alt="${video.channelName}" 
            class="channel-picture"
          />
          <div class="video-details">
            <h3 class="video-title">${video.title}</h3>
            <p class="channel-name">${video.channelName}</p>
            <p class="video-stats">${video.views} • ${video.timestamp}</p>
          </div>
        </div>
      </div>
    `;
  }
  
  // Function to render all videos
  function renderVideos() {
    const videoGrid = document.getElementById('videoGrid');
    videoGrid.innerHTML = videos.map(video => createVideoCard(video)).join('');
  }
  
  // Initialize the app
  document.addEventListener('DOMContentLoaded', () => {
    renderVideos();
  
    // Add search functionality
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();
      const filteredVideos = videos.filter(video => 
        video.title.toLowerCase().includes(searchTerm) ||
        video.channelName.toLowerCase().includes(searchTerm)
      );
      
      const videoGrid = document.getElementById('videoGrid');
      videoGrid.innerHTML = filteredVideos.map(video => createVideoCard(video)).join('');
    });
  });