import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nhds")
export default class NhdController {
  @operation({
    summary: "Get Nhds",
  })
  @get()
  static getNhds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nhd",
  })
  @post("{id}")
  static createNhd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
