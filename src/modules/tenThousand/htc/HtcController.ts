import { procedure, prefix, get, post, operation } from "vovk";

@prefix("htc")
export default class HtcController {
  @operation({
    summary: "Get Htc",
  })
  @get()
  static getHtc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Htc",
  })
  @post("{id}")
  static createHtc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
