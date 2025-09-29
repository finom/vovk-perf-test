import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kbds")
export default class KbdController {
  @operation({
    summary: "Get Kbds",
  })
  @get()
  static getKbds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kbd",
  })
  @post("{id}")
  static createKbd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
