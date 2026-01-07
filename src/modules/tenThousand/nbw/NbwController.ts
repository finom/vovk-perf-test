import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nbw")
export default class NbwController {
  @operation({
    summary: "Get Nbw",
  })
  @get()
  static getNbw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nbw",
  })
  @post("{id}")
  static createNbw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
