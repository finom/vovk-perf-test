import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gsns")
export default class GsnController {
  @operation({
    summary: "Get Gsns",
  })
  @get()
  static getGsns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gsn",
  })
  @post("{id}")
  static createGsn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
