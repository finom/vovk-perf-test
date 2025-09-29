import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ifxes")
export default class IfxController {
  @operation({
    summary: "Get Ifxes",
  })
  @get()
  static getIfxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ifx",
  })
  @post("{id}")
  static createIfx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
