import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ezus")
export default class EzuController {
  @operation({
    summary: "Get Ezus",
  })
  @get()
  static getEzus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ezu",
  })
  @post("{id}")
  static createEzu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
