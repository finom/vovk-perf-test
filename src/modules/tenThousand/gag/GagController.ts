import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gags")
export default class GagController {
  @operation({
    summary: "Get Gags",
  })
  @get()
  static getGags = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gag",
  })
  @post("{id}")
  static createGag = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
