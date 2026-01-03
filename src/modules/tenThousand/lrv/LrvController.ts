import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lrvs")
export default class LrvController {
  @operation({
    summary: "Get Lrvs",
  })
  @get()
  static getLrvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lrv",
  })
  @post("{id}")
  static createLrv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
