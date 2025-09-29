import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("amxes")
export default class AmxController {
  @operation({
    summary: "Get Amxes",
  })
  @get()
  static getAmxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Amx",
  })
  @post("{id}")
  static createAmx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
