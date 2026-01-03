import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gkies")
export default class GkyController {
  @operation({
    summary: "Get Gkies",
  })
  @get()
  static getGkies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gky",
  })
  @post("{id}")
  static createGky = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
