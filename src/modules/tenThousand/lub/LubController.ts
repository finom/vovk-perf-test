import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lub")
export default class LubController {
  @operation({
    summary: "Get Lub",
  })
  @get()
  static getLub = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lub",
  })
  @post("{id}")
  static createLub = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
