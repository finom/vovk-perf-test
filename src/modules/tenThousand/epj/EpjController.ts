import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("epjs")
export default class EpjController {
  @operation({
    summary: "Get Epjs",
  })
  @get()
  static getEpjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Epj",
  })
  @post("{id}")
  static createEpj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
