import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cies")
export default class CieController {
  @operation({
    summary: "Get Cies",
  })
  @get()
  static getCies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cie",
  })
  @post("{id}")
  static createCie = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
