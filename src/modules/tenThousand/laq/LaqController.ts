import { procedure, prefix, get, post, operation } from "vovk";

@prefix("laq")
export default class LaqController {
  @operation({
    summary: "Get Laq",
  })
  @get()
  static getLaq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Laq",
  })
  @post("{id}")
  static createLaq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
