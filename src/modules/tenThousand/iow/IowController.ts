import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iows")
export default class IowController {
  @operation({
    summary: "Get Iows",
  })
  @get()
  static getIows = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iow",
  })
  @post("{id}")
  static createIow = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
