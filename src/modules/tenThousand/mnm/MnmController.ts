import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mnms")
export default class MnmController {
  @operation({
    summary: "Get Mnms",
  })
  @get()
  static getMnms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mnm",
  })
  @post("{id}")
  static createMnm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
