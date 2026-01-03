import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bwbs")
export default class BwbController {
  @operation({
    summary: "Get Bwbs",
  })
  @get()
  static getBwbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bwb",
  })
  @post("{id}")
  static createBwb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
