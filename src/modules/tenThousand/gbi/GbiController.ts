import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gbis")
export default class GbiController {
  @operation({
    summary: "Get Gbis",
  })
  @get()
  static getGbis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gbi",
  })
  @post("{id}")
  static createGbi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
