import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eils")
export default class EilController {
  @operation({
    summary: "Get Eils",
  })
  @get()
  static getEils = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eil",
  })
  @post("{id}")
  static createEil = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
