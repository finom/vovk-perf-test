import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nrms")
export default class NrmController {
  @operation({
    summary: "Get Nrms",
  })
  @get()
  static getNrms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nrm",
  })
  @post("{id}")
  static createNrm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
