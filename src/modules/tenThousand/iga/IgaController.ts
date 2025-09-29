import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("igas")
export default class IgaController {
  @operation({
    summary: "Get Igas",
  })
  @get()
  static getIgas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iga",
  })
  @post("{id}")
  static createIga = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
