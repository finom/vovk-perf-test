import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gtc")
export default class GtcController {
  @operation({
    summary: "Get Gtc",
  })
  @get()
  static getGtc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gtc",
  })
  @post("{id}")
  static createGtc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
