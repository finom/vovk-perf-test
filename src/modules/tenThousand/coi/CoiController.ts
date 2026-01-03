import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cois")
export default class CoiController {
  @operation({
    summary: "Get Cois",
  })
  @get()
  static getCois = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Coi",
  })
  @post("{id}")
  static createCoi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
