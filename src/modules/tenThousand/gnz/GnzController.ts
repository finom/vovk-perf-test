import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gnzs")
export default class GnzController {
  @operation({
    summary: "Get Gnzs",
  })
  @get()
  static getGnzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gnz",
  })
  @post("{id}")
  static createGnz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
