import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("luzs")
export default class LuzController {
  @operation({
    summary: "Get Luzs",
  })
  @get()
  static getLuzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Luz",
  })
  @post("{id}")
  static createLuz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
