import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aeqs")
export default class AeqController {
  @operation({
    summary: "Get Aeqs",
  })
  @get()
  static getAeqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aeq",
  })
  @post("{id}")
  static createAeq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
