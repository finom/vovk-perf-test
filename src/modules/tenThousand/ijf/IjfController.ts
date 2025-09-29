import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ijfs")
export default class IjfController {
  @operation({
    summary: "Get Ijfs",
  })
  @get()
  static getIjfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ijf",
  })
  @post("{id}")
  static createIjf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
