import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bwns")
export default class BwnController {
  @operation({
    summary: "Get Bwns",
  })
  @get()
  static getBwns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bwn",
  })
  @post("{id}")
  static createBwn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
