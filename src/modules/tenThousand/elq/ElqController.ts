import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("elqs")
export default class ElqController {
  @operation({
    summary: "Get Elqs",
  })
  @get()
  static getElqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Elq",
  })
  @post("{id}")
  static createElq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
