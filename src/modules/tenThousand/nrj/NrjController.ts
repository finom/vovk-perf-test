import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nrjs")
export default class NrjController {
  @operation({
    summary: "Get Nrjs",
  })
  @get()
  static getNrjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nrj",
  })
  @post("{id}")
  static createNrj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
