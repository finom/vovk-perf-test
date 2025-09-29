import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aets")
export default class AetController {
  @operation({
    summary: "Get Aets",
  })
  @get()
  static getAets = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aet",
  })
  @post("{id}")
  static createAet = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
