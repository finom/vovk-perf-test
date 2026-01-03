import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lcbs")
export default class LcbController {
  @operation({
    summary: "Get Lcbs",
  })
  @get()
  static getLcbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lcb",
  })
  @post("{id}")
  static createLcb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
