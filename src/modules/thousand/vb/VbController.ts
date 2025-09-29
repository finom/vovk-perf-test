import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("vbs")
export default class VbController {
  @operation({
    summary: "Get Vbs",
  })
  @get()
  static getVbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Vb",
  })
  @post("{id}")
  static createVb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
