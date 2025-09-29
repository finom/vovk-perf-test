import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gkps")
export default class GkpController {
  @operation({
    summary: "Get Gkps",
  })
  @get()
  static getGkps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gkp",
  })
  @post("{id}")
  static createGkp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
