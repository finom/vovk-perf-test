import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cve")
export default class CveController {
  @operation({
    summary: "Get Cve",
  })
  @get()
  static getCve = procedure({
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
