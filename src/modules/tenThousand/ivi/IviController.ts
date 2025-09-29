import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ivis")
export default class IviController {
  @operation({
    summary: "Get Ivis",
  })
  @get()
  static getIvis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ivi",
  })
  @post("{id}")
  static createIvi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
