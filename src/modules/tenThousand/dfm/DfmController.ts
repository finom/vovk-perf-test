import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dfms")
export default class DfmController {
  @operation({
    summary: "Get Dfms",
  })
  @get()
  static getDfms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dfm",
  })
  @post("{id}")
  static createDfm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
