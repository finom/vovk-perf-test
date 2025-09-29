import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hsps")
export default class HspController {
  @operation({
    summary: "Get Hsps",
  })
  @get()
  static getHsps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hsp",
  })
  @post("{id}")
  static createHsp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
