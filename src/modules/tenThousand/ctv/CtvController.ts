import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ctvs")
export default class CtvController {
  @operation({
    summary: "Get Ctvs",
  })
  @get()
  static getCtvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ctv",
  })
  @post("{id}")
  static createCtv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
