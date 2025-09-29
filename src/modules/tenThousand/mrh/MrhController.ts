import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mrhs")
export default class MrhController {
  @operation({
    summary: "Get Mrhs",
  })
  @get()
  static getMrhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mrh",
  })
  @post("{id}")
  static createMrh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
