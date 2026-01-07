import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lcr")
export default class LcrController {
  @operation({
    summary: "Get Lcr",
  })
  @get()
  static getLcr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lcr",
  })
  @post("{id}")
  static createLcr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
