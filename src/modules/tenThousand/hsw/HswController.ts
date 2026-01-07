import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hsw")
export default class HswController {
  @operation({
    summary: "Get Hsw",
  })
  @get()
  static getHsw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hsw",
  })
  @post("{id}")
  static createHsw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
