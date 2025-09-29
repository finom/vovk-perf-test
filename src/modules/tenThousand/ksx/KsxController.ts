import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ksxes")
export default class KsxController {
  @operation({
    summary: "Get Ksxes",
  })
  @get()
  static getKsxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ksx",
  })
  @post("{id}")
  static createKsx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
