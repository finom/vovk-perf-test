import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("tes")
export default class TeController {
  @operation({
    summary: "Get Tes",
  })
  @get()
  static getTes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Te",
  })
  @post("{id}")
  static createTe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
