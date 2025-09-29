import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ties")
export default class TyController {
  @operation({
    summary: "Get Ties",
  })
  @get()
  static getTies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ty",
  })
  @post("{id}")
  static createTy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
