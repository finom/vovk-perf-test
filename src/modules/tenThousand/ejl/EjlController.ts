import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ejls")
export default class EjlController {
  @operation({
    summary: "Get Ejls",
  })
  @get()
  static getEjls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ejl",
  })
  @post("{id}")
  static createEjl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
