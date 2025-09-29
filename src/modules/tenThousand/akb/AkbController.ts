import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("akbs")
export default class AkbController {
  @operation({
    summary: "Get Akbs",
  })
  @get()
  static getAkbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Akb",
  })
  @post("{id}")
  static createAkb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
