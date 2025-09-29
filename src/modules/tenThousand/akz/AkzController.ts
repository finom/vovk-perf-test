import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("akzs")
export default class AkzController {
  @operation({
    summary: "Get Akzs",
  })
  @get()
  static getAkzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Akz",
  })
  @post("{id}")
  static createAkz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
