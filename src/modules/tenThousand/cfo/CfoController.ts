import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cfos")
export default class CfoController {
  @operation({
    summary: "Get Cfos",
  })
  @get()
  static getCfos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cfo",
  })
  @post("{id}")
  static createCfo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
