import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cves")
export default class CveController {
  @operation({
    summary: "Get Cves",
  })
  @get()
  static getCves = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cve",
  })
  @post("{id}")
  static createCve = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
