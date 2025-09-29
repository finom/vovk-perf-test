import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("efls")
export default class EflController {
  @operation({
    summary: "Get Efls",
  })
  @get()
  static getEfls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Efl",
  })
  @post("{id}")
  static createEfl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
