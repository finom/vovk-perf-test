import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gsv")
export default class GsvController {
  @operation({
    summary: "Get Gsv",
  })
  @get()
  static getGsv = procedure({
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
