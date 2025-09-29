import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("htbs")
export default class HtbController {
  @operation({
    summary: "Get Htbs",
  })
  @get()
  static getHtbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Htb",
  })
  @post("{id}")
  static createHtb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
