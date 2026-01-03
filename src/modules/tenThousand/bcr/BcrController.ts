import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bcrs")
export default class BcrController {
  @operation({
    summary: "Get Bcrs",
  })
  @get()
  static getBcrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bcr",
  })
  @post("{id}")
  static createBcr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
