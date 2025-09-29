import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fpts")
export default class FptController {
  @operation({
    summary: "Get Fpts",
  })
  @get()
  static getFpts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fpt",
  })
  @post("{id}")
  static createFpt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
