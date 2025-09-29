import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iads")
export default class IadController {
  @operation({
    summary: "Get Iads",
  })
  @get()
  static getIads = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iad",
  })
  @post("{id}")
  static createIad = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
