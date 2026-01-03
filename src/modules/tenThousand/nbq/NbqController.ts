import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nbqs")
export default class NbqController {
  @operation({
    summary: "Get Nbqs",
  })
  @get()
  static getNbqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nbq",
  })
  @post("{id}")
  static createNbq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
