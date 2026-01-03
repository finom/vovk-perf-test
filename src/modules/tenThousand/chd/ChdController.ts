import { procedure, prefix, get, post, operation } from "vovk";

@prefix("chds")
export default class ChdController {
  @operation({
    summary: "Get Chds",
  })
  @get()
  static getChds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Chd",
  })
  @post("{id}")
  static createChd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
