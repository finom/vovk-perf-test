import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("efbs")
export default class EfbController {
  @operation({
    summary: "Get Efbs",
  })
  @get()
  static getEfbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Efb",
  })
  @post("{id}")
  static createEfb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
