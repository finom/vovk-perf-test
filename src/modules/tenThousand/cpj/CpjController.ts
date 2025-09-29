import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cpjs")
export default class CpjController {
  @operation({
    summary: "Get Cpjs",
  })
  @get()
  static getCpjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cpj",
  })
  @post("{id}")
  static createCpj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
