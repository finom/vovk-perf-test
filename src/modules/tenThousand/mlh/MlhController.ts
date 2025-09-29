import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mlhs")
export default class MlhController {
  @operation({
    summary: "Get Mlhs",
  })
  @get()
  static getMlhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mlh",
  })
  @post("{id}")
  static createMlh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
