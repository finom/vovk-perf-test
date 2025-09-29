import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("sps")
export default class SpController {
  @operation({
    summary: "Get Sps",
  })
  @get()
  static getSps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Sp",
  })
  @post("{id}")
  static createSp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
