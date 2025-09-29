import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mlrs")
export default class MlrController {
  @operation({
    summary: "Get Mlrs",
  })
  @get()
  static getMlrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mlr",
  })
  @post("{id}")
  static createMlr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
