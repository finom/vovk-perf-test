import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nrhs")
export default class NrhController {
  @operation({
    summary: "Get Nrhs",
  })
  @get()
  static getNrhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nrh",
  })
  @post("{id}")
  static createNrh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
