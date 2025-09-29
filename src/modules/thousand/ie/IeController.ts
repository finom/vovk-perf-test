import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ies")
export default class IeController {
  @operation({
    summary: "Get Ies",
  })
  @get()
  static getIes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ie",
  })
  @post("{id}")
  static createIe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
