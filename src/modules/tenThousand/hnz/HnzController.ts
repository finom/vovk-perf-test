import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hnzs")
export default class HnzController {
  @operation({
    summary: "Get Hnzs",
  })
  @get()
  static getHnzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hnz",
  })
  @post("{id}")
  static createHnz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
