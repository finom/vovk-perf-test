import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lcws")
export default class LcwController {
  @operation({
    summary: "Get Lcws",
  })
  @get()
  static getLcws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lcw",
  })
  @post("{id}")
  static createLcw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
