import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("efes")
export default class EfeController {
  @operation({
    summary: "Get Efes",
  })
  @get()
  static getEfes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Efe",
  })
  @post("{id}")
  static createEfe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
