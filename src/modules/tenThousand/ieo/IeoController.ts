import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ieos")
export default class IeoController {
  @operation({
    summary: "Get Ieos",
  })
  @get()
  static getIeos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ieo",
  })
  @post("{id}")
  static createIeo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
