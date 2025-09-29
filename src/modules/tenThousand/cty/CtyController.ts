import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cties")
export default class CtyController {
  @operation({
    summary: "Get Cties",
  })
  @get()
  static getCties = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cty",
  })
  @post("{id}")
  static createCty = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
