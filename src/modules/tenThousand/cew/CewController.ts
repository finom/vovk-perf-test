import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cew")
export default class CewController {
  @operation({
    summary: "Get Cew",
  })
  @get()
  static getCew = procedure({
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
