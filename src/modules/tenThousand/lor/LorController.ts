import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lor")
export default class LorController {
  @operation({
    summary: "Get Lor",
  })
  @get()
  static getLor = procedure({
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
