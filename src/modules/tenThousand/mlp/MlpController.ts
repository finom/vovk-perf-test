import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mlps")
export default class MlpController {
  @operation({
    summary: "Get Mlps",
  })
  @get()
  static getMlps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mlp",
  })
  @post("{id}")
  static createMlp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
