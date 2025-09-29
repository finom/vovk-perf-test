import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hbis")
export default class HbiController {
  @operation({
    summary: "Get Hbis",
  })
  @get()
  static getHbis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hbi",
  })
  @post("{id}")
  static createHbi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
