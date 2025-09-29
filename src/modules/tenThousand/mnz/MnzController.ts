import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mnzs")
export default class MnzController {
  @operation({
    summary: "Get Mnzs",
  })
  @get()
  static getMnzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mnz",
  })
  @post("{id}")
  static createMnz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
