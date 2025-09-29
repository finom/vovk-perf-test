import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ifas")
export default class IfaController {
  @operation({
    summary: "Get Ifas",
  })
  @get()
  static getIfas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ifa",
  })
  @post("{id}")
  static createIfa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
