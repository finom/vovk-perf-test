import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hsvs")
export default class HsvController {
  @operation({
    summary: "Get Hsvs",
  })
  @get()
  static getHsvs = procedure({
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
