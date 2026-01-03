import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cdgs")
export default class CdgController {
  @operation({
    summary: "Get Cdgs",
  })
  @get()
  static getCdgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cdg",
  })
  @post("{id}")
  static createCdg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
