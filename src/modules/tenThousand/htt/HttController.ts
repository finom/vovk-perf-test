import { procedure, prefix, get, post, operation } from "vovk";

@prefix("htts")
export default class HttController {
  @operation({
    summary: "Get Htts",
  })
  @get()
  static getHtts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Htt",
  })
  @post("{id}")
  static createHtt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
