import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mses")
export default class MseController {
  @operation({
    summary: "Get Mses",
  })
  @get()
  static getMses = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mse",
  })
  @post("{id}")
  static createMse = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
