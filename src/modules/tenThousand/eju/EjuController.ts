import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ejus")
export default class EjuController {
  @operation({
    summary: "Get Ejus",
  })
  @get()
  static getEjus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eju",
  })
  @post("{id}")
  static createEju = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
