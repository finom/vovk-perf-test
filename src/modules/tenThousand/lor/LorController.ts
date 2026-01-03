import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lors")
export default class LorController {
  @operation({
    summary: "Get Lors",
  })
  @get()
  static getLors = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lor",
  })
  @post("{id}")
  static createLor = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
