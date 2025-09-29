import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mlns")
export default class MlnController {
  @operation({
    summary: "Get Mlns",
  })
  @get()
  static getMlns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mln",
  })
  @post("{id}")
  static createMln = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
