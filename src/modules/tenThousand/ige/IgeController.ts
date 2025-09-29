import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iges")
export default class IgeController {
  @operation({
    summary: "Get Iges",
  })
  @get()
  static getIges = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ige",
  })
  @post("{id}")
  static createIge = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
