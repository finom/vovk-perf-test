import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hucs")
export default class HucController {
  @operation({
    summary: "Get Hucs",
  })
  @get()
  static getHucs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Huc",
  })
  @post("{id}")
  static createHuc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
