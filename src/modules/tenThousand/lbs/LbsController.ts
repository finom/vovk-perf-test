import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lbs")
export default class LbsController {
  @operation({
    summary: "Get Lbs",
  })
  @get()
  static getLbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lbs",
  })
  @post("{id}")
  static createLbs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
