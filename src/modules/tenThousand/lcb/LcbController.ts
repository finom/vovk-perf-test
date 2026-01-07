import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lcb")
export default class LcbController {
  @operation({
    summary: "Get Lcb",
  })
  @get()
  static getLcb = procedure({
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
