import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lwg")
export default class LwgController {
  @operation({
    summary: "Get Lwg",
  })
  @get()
  static getLwg = procedure({
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
