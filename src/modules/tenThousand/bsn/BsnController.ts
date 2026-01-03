import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bsns")
export default class BsnController {
  @operation({
    summary: "Get Bsns",
  })
  @get()
  static getBsns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bsn",
  })
  @post("{id}")
  static createBsn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
