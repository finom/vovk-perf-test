import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mlws")
export default class MlwController {
  @operation({
    summary: "Get Mlws",
  })
  @get()
  static getMlws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mlw",
  })
  @post("{id}")
  static createMlw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
