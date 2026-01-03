import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gbks")
export default class GbkController {
  @operation({
    summary: "Get Gbks",
  })
  @get()
  static getGbks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gbk",
  })
  @post("{id}")
  static createGbk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
