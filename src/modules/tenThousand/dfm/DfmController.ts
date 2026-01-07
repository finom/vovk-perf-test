import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dfm")
export default class DfmController {
  @operation({
    summary: "Get Dfm",
  })
  @get()
  static getDfm = procedure({
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
