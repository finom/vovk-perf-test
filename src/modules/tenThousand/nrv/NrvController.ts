import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nrv")
export default class NrvController {
  @operation({
    summary: "Get Nrv",
  })
  @get()
  static getNrv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nrv",
  })
  @post("{id}")
  static createNrv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
