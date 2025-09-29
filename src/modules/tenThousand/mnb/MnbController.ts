import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mnbs")
export default class MnbController {
  @operation({
    summary: "Get Mnbs",
  })
  @get()
  static getMnbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mnb",
  })
  @post("{id}")
  static createMnb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
