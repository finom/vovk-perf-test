import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ghrs")
export default class GhrController {
  @operation({
    summary: "Get Ghrs",
  })
  @get()
  static getGhrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ghr",
  })
  @post("{id}")
  static createGhr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
