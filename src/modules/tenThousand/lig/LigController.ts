import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lig")
export default class LigController {
  @operation({
    summary: "Get Lig",
  })
  @get()
  static getLig = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lig",
  })
  @post("{id}")
  static createLig = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
