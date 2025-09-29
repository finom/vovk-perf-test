import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ikgs")
export default class IkgController {
  @operation({
    summary: "Get Ikgs",
  })
  @get()
  static getIkgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ikg",
  })
  @post("{id}")
  static createIkg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
