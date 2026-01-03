import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gwns")
export default class GwnController {
  @operation({
    summary: "Get Gwns",
  })
  @get()
  static getGwns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gwn",
  })
  @post("{id}")
  static createGwn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
