import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gafs")
export default class GafController {
  @operation({
    summary: "Get Gafs",
  })
  @get()
  static getGafs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gaf",
  })
  @post("{id}")
  static createGaf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
