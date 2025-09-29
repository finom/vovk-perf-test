import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mdes")
export default class MdeController {
  @operation({
    summary: "Get Mdes",
  })
  @get()
  static getMdes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mde",
  })
  @post("{id}")
  static createMde = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
