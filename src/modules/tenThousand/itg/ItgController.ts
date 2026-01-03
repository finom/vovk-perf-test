import { procedure, prefix, get, post, operation } from "vovk";

@prefix("itgs")
export default class ItgController {
  @operation({
    summary: "Get Itgs",
  })
  @get()
  static getItgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Itg",
  })
  @post("{id}")
  static createItg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
