import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("chls")
export default class ChlController {
  @operation({
    summary: "Get Chls",
  })
  @get()
  static getChls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Chl",
  })
  @post("{id}")
  static createChl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
