import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("afos")
export default class AfoController {
  @operation({
    summary: "Get Afos",
  })
  @get()
  static getAfos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Afo",
  })
  @post("{id}")
  static createAfo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
