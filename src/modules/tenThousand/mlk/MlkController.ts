import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mlks")
export default class MlkController {
  @operation({
    summary: "Get Mlks",
  })
  @get()
  static getMlks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mlk",
  })
  @post("{id}")
  static createMlk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
