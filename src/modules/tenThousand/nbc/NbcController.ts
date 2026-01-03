import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nbcs")
export default class NbcController {
  @operation({
    summary: "Get Nbcs",
  })
  @get()
  static getNbcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nbc",
  })
  @post("{id}")
  static createNbc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
