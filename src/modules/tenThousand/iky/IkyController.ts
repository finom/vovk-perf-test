import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ikies")
export default class IkyController {
  @operation({
    summary: "Get Ikies",
  })
  @get()
  static getIkies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iky",
  })
  @post("{id}")
  static createIky = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
