import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lnos")
export default class LnoController {
  @operation({
    summary: "Get Lnos",
  })
  @get()
  static getLnos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lno",
  })
  @post("{id}")
  static createLno = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
