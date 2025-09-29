import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("imgs")
export default class ImgController {
  @operation({
    summary: "Get Imgs",
  })
  @get()
  static getImgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Img",
  })
  @post("{id}")
  static createImg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
