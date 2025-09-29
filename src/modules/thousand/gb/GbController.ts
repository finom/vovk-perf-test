import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gbs")
export default class GbController {
  @operation({
    summary: "Get Gbs",
  })
  @get()
  static getGbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gb",
  })
  @post("{id}")
  static createGb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
