import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iqas")
export default class IqaController {
  @operation({
    summary: "Get Iqas",
  })
  @get()
  static getIqas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iqa",
  })
  @post("{id}")
  static createIqa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
