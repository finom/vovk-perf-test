import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nnbs")
export default class NnbController {
  @operation({
    summary: "Get Nnbs",
  })
  @get()
  static getNnbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nnb",
  })
  @post("{id}")
  static createNnb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
