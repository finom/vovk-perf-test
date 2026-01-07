import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nmm")
export default class NmmController {
  @operation({
    summary: "Get Nmm",
  })
  @get()
  static getNmm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nmm",
  })
  @post("{id}")
  static createNmm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
