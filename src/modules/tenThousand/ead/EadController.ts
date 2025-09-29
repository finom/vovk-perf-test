import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eads")
export default class EadController {
  @operation({
    summary: "Get Eads",
  })
  @get()
  static getEads = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ead",
  })
  @post("{id}")
  static createEad = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
