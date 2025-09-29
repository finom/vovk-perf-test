import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nrbs")
export default class NrbController {
  @operation({
    summary: "Get Nrbs",
  })
  @get()
  static getNrbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nrb",
  })
  @post("{id}")
  static createNrb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
