import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ayps")
export default class AypController {
  @operation({
    summary: "Get Ayps",
  })
  @get()
  static getAyps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ayp",
  })
  @post("{id}")
  static createAyp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
