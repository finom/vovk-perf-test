import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eios")
export default class EioController {
  @operation({
    summary: "Get Eios",
  })
  @get()
  static getEios = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eio",
  })
  @post("{id}")
  static createEio = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
