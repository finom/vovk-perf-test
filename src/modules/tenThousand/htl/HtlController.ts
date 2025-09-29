import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("htls")
export default class HtlController {
  @operation({
    summary: "Get Htls",
  })
  @get()
  static getHtls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Htl",
  })
  @post("{id}")
  static createHtl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
