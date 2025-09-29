import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kews")
export default class KewController {
  @operation({
    summary: "Get Kews",
  })
  @get()
  static getKews = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kew",
  })
  @post("{id}")
  static createKew = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
