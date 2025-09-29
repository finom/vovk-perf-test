import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mwts")
export default class MwtController {
  @operation({
    summary: "Get Mwts",
  })
  @get()
  static getMwts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mwt",
  })
  @post("{id}")
  static createMwt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
