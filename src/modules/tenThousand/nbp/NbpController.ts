import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nbp")
export default class NbpController {
  @operation({
    summary: "Get Nbp",
  })
  @get()
  static getNbp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nbp",
  })
  @post("{id}")
  static createNbp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
