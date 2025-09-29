import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("njvs")
export default class NjvController {
  @operation({
    summary: "Get Njvs",
  })
  @get()
  static getNjvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Njv",
  })
  @post("{id}")
  static createNjv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
