import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("htvs")
export default class HtvController {
  @operation({
    summary: "Get Htvs",
  })
  @get()
  static getHtvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Htv",
  })
  @post("{id}")
  static createHtv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
