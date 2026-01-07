import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nbh")
export default class NbhController {
  @operation({
    summary: "Get Nbh",
  })
  @get()
  static getNbh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nbh",
  })
  @post("{id}")
  static createNbh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
