import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mlxes")
export default class MlxController {
  @operation({
    summary: "Get Mlxes",
  })
  @get()
  static getMlxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mlx",
  })
  @post("{id}")
  static createMlx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
