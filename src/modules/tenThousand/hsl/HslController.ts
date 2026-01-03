import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hsls")
export default class HslController {
  @operation({
    summary: "Get Hsls",
  })
  @get()
  static getHsls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hsl",
  })
  @post("{id}")
  static createHsl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
