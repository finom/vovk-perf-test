import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eeos")
export default class EeoController {
  @operation({
    summary: "Get Eeos",
  })
  @get()
  static getEeos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eeo",
  })
  @post("{id}")
  static createEeo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
