import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hlns")
export default class HlnController {
  @operation({
    summary: "Get Hlns",
  })
  @get()
  static getHlns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hln",
  })
  @post("{id}")
  static createHln = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
