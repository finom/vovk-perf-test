import { procedure, prefix, get, post, operation } from "vovk";

@prefix("itg")
export default class ItgController {
  @operation({
    summary: "Get Itg",
  })
  @get()
  static getItg = procedure({
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
