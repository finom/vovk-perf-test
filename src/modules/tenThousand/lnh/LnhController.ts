import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lnhs")
export default class LnhController {
  @operation({
    summary: "Get Lnhs",
  })
  @get()
  static getLnhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lnh",
  })
  @post("{id}")
  static createLnh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
