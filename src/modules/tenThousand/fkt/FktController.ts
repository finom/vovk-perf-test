import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fkts")
export default class FktController {
  @operation({
    summary: "Get Fkts",
  })
  @get()
  static getFkts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fkt",
  })
  @post("{id}")
  static createFkt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
