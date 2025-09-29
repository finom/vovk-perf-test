import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mlms")
export default class MlmController {
  @operation({
    summary: "Get Mlms",
  })
  @get()
  static getMlms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mlm",
  })
  @post("{id}")
  static createMlm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
