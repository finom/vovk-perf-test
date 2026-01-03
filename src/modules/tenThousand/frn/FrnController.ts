import { procedure, prefix, get, post, operation } from "vovk";

@prefix("frns")
export default class FrnController {
  @operation({
    summary: "Get Frns",
  })
  @get()
  static getFrns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Frn",
  })
  @post("{id}")
  static createFrn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
