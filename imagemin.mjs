import imagemin from 'imagemin-keep-folder';
import imageminWebp from "imagemin-webp";
import imageminSvgo from "imagemin-svgo";

imagemin(['src/images/**/*{webp,jpg,jpeg,png,svg,gif}'], {
  use: [
    imageminWebp({
      quality: 90
    }),
    imageminSvgo()
  ],
  replaceOutputDir: output => {
    return output.replace(/images\//, '../dist/assets/images/')
  },
});