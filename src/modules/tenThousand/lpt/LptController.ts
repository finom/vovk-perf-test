import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lpts")
export default class LptController {
  @operation({
    summary: "Get Lpts",
  })
  @get()
  static getLpts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lpt",
  })
  @post("{id}")
  static createLpt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
