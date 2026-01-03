import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lcrs")
export default class LcrController {
  @operation({
    summary: "Get Lcrs",
  })
  @get()
  static getLcrs = procedure({
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
