import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dims")
export default class DimController {
  @operation({
    summary: "Get Dims",
  })
  @get()
  static getDims = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dim",
  })
  @post("{id}")
  static createDim = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
