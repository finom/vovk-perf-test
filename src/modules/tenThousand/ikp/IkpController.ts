import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ikps")
export default class IkpController {
  @operation({
    summary: "Get Ikps",
  })
  @get()
  static getIkps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ikp",
  })
  @post("{id}")
  static createIkp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
