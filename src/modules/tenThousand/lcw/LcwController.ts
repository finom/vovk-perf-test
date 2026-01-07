import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lcw")
export default class LcwController {
  @operation({
    summary: "Get Lcw",
  })
  @get()
  static getLcw = procedure({
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
