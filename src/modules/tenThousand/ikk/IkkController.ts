import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ikks")
export default class IkkController {
  @operation({
    summary: "Get Ikks",
  })
  @get()
  static getIkks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ikk",
  })
  @post("{id}")
  static createIkk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
