import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gags")
export default class GagController {
  @operation({
    summary: "Get Gags",
  })
  @get()
  static getGags = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gag",
  })
  @post("{id}")
  static createGag = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
