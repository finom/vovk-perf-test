import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lts")
export default class LtsController {
  @operation({
    summary: "Get Lts",
  })
  @get()
  static getLts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lts",
  })
  @post("{id}")
  static createLts = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
