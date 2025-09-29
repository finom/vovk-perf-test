import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mexes")
export default class MexController {
  @operation({
    summary: "Get Mexes",
  })
  @get()
  static getMexes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mex",
  })
  @post("{id}")
  static createMex = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
