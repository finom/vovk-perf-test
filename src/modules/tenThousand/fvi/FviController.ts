import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fvis")
export default class FviController {
  @operation({
    summary: "Get Fvis",
  })
  @get()
  static getFvis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fvi",
  })
  @post("{id}")
  static createFvi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
