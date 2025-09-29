import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ibas")
export default class IbaController {
  @operation({
    summary: "Get Ibas",
  })
  @get()
  static getIbas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iba",
  })
  @post("{id}")
  static createIba = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
