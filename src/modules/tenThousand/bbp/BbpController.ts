import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bbps")
export default class BbpController {
  @operation({
    summary: "Get Bbps",
  })
  @get()
  static getBbps = procedure({
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
