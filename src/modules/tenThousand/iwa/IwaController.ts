import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iwas")
export default class IwaController {
  @operation({
    summary: "Get Iwas",
  })
  @get()
  static getIwas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iwa",
  })
  @post("{id}")
  static createIwa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
