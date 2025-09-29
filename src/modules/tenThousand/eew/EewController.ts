import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eews")
export default class EewController {
  @operation({
    summary: "Get Eews",
  })
  @get()
  static getEews = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eew",
  })
  @post("{id}")
  static createEew = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
