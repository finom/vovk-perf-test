import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ceds")
export default class CedController {
  @operation({
    summary: "Get Ceds",
  })
  @get()
  static getCeds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ced",
  })
  @post("{id}")
  static createCed = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
