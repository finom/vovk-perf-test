import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cdies")
export default class CdyController {
  @operation({
    summary: "Get Cdies",
  })
  @get()
  static getCdies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cdy",
  })
  @post("{id}")
  static createCdy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
