import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hsb")
export default class HsbController {
  @operation({
    summary: "Get Hsb",
  })
  @get()
  static getHsb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hsb",
  })
  @post("{id}")
  static createHsb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
