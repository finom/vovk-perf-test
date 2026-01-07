import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gtw")
export default class GtwController {
  @operation({
    summary: "Get Gtw",
  })
  @get()
  static getGtw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gtw",
  })
  @post("{id}")
  static createGtw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
