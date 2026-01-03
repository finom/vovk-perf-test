import { procedure, prefix, get, post, operation } from "vovk";

@prefix("luds")
export default class LudController {
  @operation({
    summary: "Get Luds",
  })
  @get()
  static getLuds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lud",
  })
  @post("{id}")
  static createLud = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
