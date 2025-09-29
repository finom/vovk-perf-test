import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mlzs")
export default class MlzController {
  @operation({
    summary: "Get Mlzs",
  })
  @get()
  static getMlzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mlz",
  })
  @post("{id}")
  static createMlz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
