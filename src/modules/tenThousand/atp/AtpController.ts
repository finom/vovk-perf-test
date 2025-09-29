import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("atps")
export default class AtpController {
  @operation({
    summary: "Get Atps",
  })
  @get()
  static getAtps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Atp",
  })
  @post("{id}")
  static createAtp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
