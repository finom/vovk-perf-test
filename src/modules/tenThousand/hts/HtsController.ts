import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hts")
export default class HtsController {
  @operation({
    summary: "Get Hts",
  })
  @get()
  static getHts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hts",
  })
  @post("{id}")
  static createHts = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
