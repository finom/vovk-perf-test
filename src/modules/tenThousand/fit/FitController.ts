import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fit")
export default class FitController {
  @operation({
    summary: "Get Fit",
  })
  @get()
  static getFit = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fit",
  })
  @post("{id}")
  static createFit = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
