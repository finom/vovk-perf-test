import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hscs")
export default class HscController {
  @operation({
    summary: "Get Hscs",
  })
  @get()
  static getHscs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hsc",
  })
  @post("{id}")
  static createHsc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
