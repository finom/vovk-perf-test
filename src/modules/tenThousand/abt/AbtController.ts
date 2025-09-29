import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("abts")
export default class AbtController {
  @operation({
    summary: "Get Abts",
  })
  @get()
  static getAbts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Abt",
  })
  @post("{id}")
  static createAbt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
