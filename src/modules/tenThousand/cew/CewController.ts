import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cews")
export default class CewController {
  @operation({
    summary: "Get Cews",
  })
  @get()
  static getCews = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cew",
  })
  @post("{id}")
  static createCew = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
