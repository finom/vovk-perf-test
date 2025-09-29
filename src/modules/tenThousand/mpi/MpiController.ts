import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mpis")
export default class MpiController {
  @operation({
    summary: "Get Mpis",
  })
  @get()
  static getMpis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mpi",
  })
  @post("{id}")
  static createMpi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
