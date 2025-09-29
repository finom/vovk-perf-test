import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iofs")
export default class IofController {
  @operation({
    summary: "Get Iofs",
  })
  @get()
  static getIofs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iof",
  })
  @post("{id}")
  static createIof = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
