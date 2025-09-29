import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("njzs")
export default class NjzController {
  @operation({
    summary: "Get Njzs",
  })
  @get()
  static getNjzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Njz",
  })
  @post("{id}")
  static createNjz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
