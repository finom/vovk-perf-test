import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ieus")
export default class IeuController {
  @operation({
    summary: "Get Ieus",
  })
  @get()
  static getIeus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ieu",
  })
  @post("{id}")
  static createIeu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
