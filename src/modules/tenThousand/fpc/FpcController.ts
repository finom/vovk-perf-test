import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fpcs")
export default class FpcController {
  @operation({
    summary: "Get Fpcs",
  })
  @get()
  static getFpcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fpc",
  })
  @post("{id}")
  static createFpc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
