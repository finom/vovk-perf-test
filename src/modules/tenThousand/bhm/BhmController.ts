import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bhms")
export default class BhmController {
  @operation({
    summary: "Get Bhms",
  })
  @get()
  static getBhms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bhm",
  })
  @post("{id}")
  static createBhm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
