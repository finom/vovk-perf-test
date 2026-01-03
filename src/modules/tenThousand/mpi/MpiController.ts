import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mpis")
export default class MpiController {
  @operation({
    summary: "Get Mpis",
  })
  @get()
  static getMpis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mpi",
  })
  @post("{id}")
  static createMpi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
