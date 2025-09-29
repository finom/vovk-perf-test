import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("elns")
export default class ElnController {
  @operation({
    summary: "Get Elns",
  })
  @get()
  static getElns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eln",
  })
  @post("{id}")
  static createEln = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
