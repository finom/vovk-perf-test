import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ejbs")
export default class EjbController {
  @operation({
    summary: "Get Ejbs",
  })
  @get()
  static getEjbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ejb",
  })
  @post("{id}")
  static createEjb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
