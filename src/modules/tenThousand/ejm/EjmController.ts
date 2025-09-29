import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ejms")
export default class EjmController {
  @operation({
    summary: "Get Ejms",
  })
  @get()
  static getEjms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ejm",
  })
  @post("{id}")
  static createEjm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
