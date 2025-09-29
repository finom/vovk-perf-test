import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nrgs")
export default class NrgController {
  @operation({
    summary: "Get Nrgs",
  })
  @get()
  static getNrgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nrg",
  })
  @post("{id}")
  static createNrg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
