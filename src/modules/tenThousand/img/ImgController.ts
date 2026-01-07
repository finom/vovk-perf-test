import { procedure, prefix, get, post, operation } from "vovk";

@prefix("img")
export default class ImgController {
  @operation({
    summary: "Get Img",
  })
  @get()
  static getImg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Img",
  })
  @post("{id}")
  static createImg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
