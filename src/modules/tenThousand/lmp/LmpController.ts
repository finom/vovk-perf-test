import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lmps")
export default class LmpController {
  @operation({
    summary: "Get Lmps",
  })
  @get()
  static getLmps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lmp",
  })
  @post("{id}")
  static createLmp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
