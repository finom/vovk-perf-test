import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mlvs")
export default class MlvController {
  @operation({
    summary: "Get Mlvs",
  })
  @get()
  static getMlvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mlv",
  })
  @post("{id}")
  static createMlv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
