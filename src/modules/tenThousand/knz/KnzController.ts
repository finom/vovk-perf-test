import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("knzs")
export default class KnzController {
  @operation({
    summary: "Get Knzs",
  })
  @get()
  static getKnzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Knz",
  })
  @post("{id}")
  static createKnz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
