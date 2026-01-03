import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lubs")
export default class LubController {
  @operation({
    summary: "Get Lubs",
  })
  @get()
  static getLubs = procedure({
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
