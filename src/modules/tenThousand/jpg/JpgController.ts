import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jpgs")
export default class JpgController {
  @operation({
    summary: "Get Jpgs",
  })
  @get()
  static getJpgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jpg",
  })
  @post("{id}")
  static createJpg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
