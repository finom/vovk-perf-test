import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lsses")
export default class LssController {
  @operation({
    summary: "Get Lsses",
  })
  @get()
  static getLsses = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lss",
  })
  @post("{id}")
  static createLss = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
