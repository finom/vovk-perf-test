import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mxis")
export default class MxiController {
  @operation({
    summary: "Get Mxis",
  })
  @get()
  static getMxis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mxi",
  })
  @post("{id}")
  static createMxi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
