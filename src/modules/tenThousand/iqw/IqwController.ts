import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iqws")
export default class IqwController {
  @operation({
    summary: "Get Iqws",
  })
  @get()
  static getIqws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iqw",
  })
  @post("{id}")
  static createIqw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
