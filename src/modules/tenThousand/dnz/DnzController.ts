import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dnzs")
export default class DnzController {
  @operation({
    summary: "Get Dnzs",
  })
  @get()
  static getDnzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dnz",
  })
  @post("{id}")
  static createDnz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
