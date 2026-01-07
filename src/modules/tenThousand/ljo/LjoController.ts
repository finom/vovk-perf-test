import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ljo")
export default class LjoController {
  @operation({
    summary: "Get Ljo",
  })
  @get()
  static getLjo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ljo",
  })
  @post("{id}")
  static createLjo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
