import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gsvs")
export default class GsvController {
  @operation({
    summary: "Get Gsvs",
  })
  @get()
  static getGsvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gsv",
  })
  @post("{id}")
  static createGsv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
