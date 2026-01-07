import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bpt")
export default class BptController {
  @operation({
    summary: "Get Bpt",
  })
  @get()
  static getBpt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bpt",
  })
  @post("{id}")
  static createBpt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
