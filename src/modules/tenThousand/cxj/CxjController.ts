import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cxjs")
export default class CxjController {
  @operation({
    summary: "Get Cxjs",
  })
  @get()
  static getCxjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cxj",
  })
  @post("{id}")
  static createCxj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
