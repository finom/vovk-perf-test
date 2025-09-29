import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("apes")
export default class ApeController {
  @operation({
    summary: "Get Apes",
  })
  @get()
  static getApes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ape",
  })
  @post("{id}")
  static createApe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
