import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aows")
export default class AowController {
  @operation({
    summary: "Get Aows",
  })
  @get()
  static getAows = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aow",
  })
  @post("{id}")
  static createAow = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
