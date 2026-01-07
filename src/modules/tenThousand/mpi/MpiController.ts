import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mpi")
export default class MpiController {
  @operation({
    summary: "Get Mpi",
  })
  @get()
  static getMpi = procedure({
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
