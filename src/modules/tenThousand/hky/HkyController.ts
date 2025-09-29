import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hkies")
export default class HkyController {
  @operation({
    summary: "Get Hkies",
  })
  @get()
  static getHkies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hky",
  })
  @post("{id}")
  static createHky = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
