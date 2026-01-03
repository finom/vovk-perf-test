import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bwps")
export default class BwpController {
  @operation({
    summary: "Get Bwps",
  })
  @get()
  static getBwps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bwp",
  })
  @post("{id}")
  static createBwp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
