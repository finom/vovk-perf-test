import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hdes")
export default class HdeController {
  @operation({
    summary: "Get Hdes",
  })
  @get()
  static getHdes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hde",
  })
  @post("{id}")
  static createHde = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
