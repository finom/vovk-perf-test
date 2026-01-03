import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lwks")
export default class LwkController {
  @operation({
    summary: "Get Lwks",
  })
  @get()
  static getLwks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lwk",
  })
  @post("{id}")
  static createLwk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
