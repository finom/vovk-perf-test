import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("njgs")
export default class NjgController {
  @operation({
    summary: "Get Njgs",
  })
  @get()
  static getNjgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Njg",
  })
  @post("{id}")
  static createNjg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
