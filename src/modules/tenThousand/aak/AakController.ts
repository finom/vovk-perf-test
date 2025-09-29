import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aaks")
export default class AakController {
  @operation({
    summary: "Get Aaks",
  })
  @get()
  static getAaks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aak",
  })
  @post("{id}")
  static createAak = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
