import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lwgs")
export default class LwgController {
  @operation({
    summary: "Get Lwgs",
  })
  @get()
  static getLwgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lwg",
  })
  @post("{id}")
  static createLwg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
