import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ejhs")
export default class EjhController {
  @operation({
    summary: "Get Ejhs",
  })
  @get()
  static getEjhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ejh",
  })
  @post("{id}")
  static createEjh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
