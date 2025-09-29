import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eius")
export default class EiuController {
  @operation({
    summary: "Get Eius",
  })
  @get()
  static getEius = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eiu",
  })
  @post("{id}")
  static createEiu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
