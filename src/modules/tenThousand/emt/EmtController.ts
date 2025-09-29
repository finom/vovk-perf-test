import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("emts")
export default class EmtController {
  @operation({
    summary: "Get Emts",
  })
  @get()
  static getEmts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Emt",
  })
  @post("{id}")
  static createEmt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
