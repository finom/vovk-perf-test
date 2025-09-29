import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mdhs")
export default class MdhController {
  @operation({
    summary: "Get Mdhs",
  })
  @get()
  static getMdhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mdh",
  })
  @post("{id}")
  static createMdh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
