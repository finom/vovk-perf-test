import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hsws")
export default class HswController {
  @operation({
    summary: "Get Hsws",
  })
  @get()
  static getHsws = procedure({
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
