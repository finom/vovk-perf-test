import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ervs")
export default class ErvController {
  @operation({
    summary: "Get Ervs",
  })
  @get()
  static getErvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Erv",
  })
  @post("{id}")
  static createErv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
