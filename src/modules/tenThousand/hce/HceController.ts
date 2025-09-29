import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hces")
export default class HceController {
  @operation({
    summary: "Get Hces",
  })
  @get()
  static getHces = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hce",
  })
  @post("{id}")
  static createHce = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
