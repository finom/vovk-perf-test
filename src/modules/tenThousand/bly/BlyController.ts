import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("blies")
export default class BlyController {
  @operation({
    summary: "Get Blies",
  })
  @get()
  static getBlies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bly",
  })
  @post("{id}")
  static createBly = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
