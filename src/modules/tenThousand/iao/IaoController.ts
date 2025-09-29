import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iaos")
export default class IaoController {
  @operation({
    summary: "Get Iaos",
  })
  @get()
  static getIaos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iao",
  })
  @post("{id}")
  static createIao = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
