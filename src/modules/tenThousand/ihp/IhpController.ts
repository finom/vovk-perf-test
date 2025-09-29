import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ihps")
export default class IhpController {
  @operation({
    summary: "Get Ihps",
  })
  @get()
  static getIhps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ihp",
  })
  @post("{id}")
  static createIhp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
