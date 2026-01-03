import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nrhs")
export default class NrhController {
  @operation({
    summary: "Get Nrhs",
  })
  @get()
  static getNrhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nrh",
  })
  @post("{id}")
  static createNrh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
