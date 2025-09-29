import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ehos")
export default class EhoController {
  @operation({
    summary: "Get Ehos",
  })
  @get()
  static getEhos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eho",
  })
  @post("{id}")
  static createEho = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
