import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("icvs")
export default class IcvController {
  @operation({
    summary: "Get Icvs",
  })
  @get()
  static getIcvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Icv",
  })
  @post("{id}")
  static createIcv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
