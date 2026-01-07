import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gif")
export default class GifController {
  @operation({
    summary: "Get Gif",
  })
  @get()
  static getGif = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gif",
  })
  @post("{id}")
  static createGif = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
