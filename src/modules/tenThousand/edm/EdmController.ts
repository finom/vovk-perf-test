import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("edms")
export default class EdmController {
  @operation({
    summary: "Get Edms",
  })
  @get()
  static getEdms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Edm",
  })
  @post("{id}")
  static createEdm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
