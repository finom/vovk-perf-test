import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bbp")
export default class BbpController {
  @operation({
    summary: "Get Bbp",
  })
  @get()
  static getBbp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bbp",
  })
  @post("{id}")
  static createBbp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
