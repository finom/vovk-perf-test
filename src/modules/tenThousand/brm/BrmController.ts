import { procedure, prefix, get, post, operation } from "vovk";

@prefix("brms")
export default class BrmController {
  @operation({
    summary: "Get Brms",
  })
  @get()
  static getBrms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Brm",
  })
  @post("{id}")
  static createBrm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
