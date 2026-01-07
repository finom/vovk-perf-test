import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hsv")
export default class HsvController {
  @operation({
    summary: "Get Hsv",
  })
  @get()
  static getHsv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hsv",
  })
  @post("{id}")
  static createHsv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
