import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nnrs")
export default class NnrController {
  @operation({
    summary: "Get Nnrs",
  })
  @get()
  static getNnrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nnr",
  })
  @post("{id}")
  static createNnr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
