import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gbk")
export default class GbkController {
  @operation({
    summary: "Get Gbk",
  })
  @get()
  static getGbk = procedure({
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
