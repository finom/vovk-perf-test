import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fdes")
export default class FdeController {
  @operation({
    summary: "Get Fdes",
  })
  @get()
  static getFdes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fde",
  })
  @post("{id}")
  static createFde = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
