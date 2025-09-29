import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ibls")
export default class IblController {
  @operation({
    summary: "Get Ibls",
  })
  @get()
  static getIbls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ibl",
  })
  @post("{id}")
  static createIbl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
