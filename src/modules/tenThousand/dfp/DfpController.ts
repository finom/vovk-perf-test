import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dfps")
export default class DfpController {
  @operation({
    summary: "Get Dfps",
  })
  @get()
  static getDfps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dfp",
  })
  @post("{id}")
  static createDfp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
