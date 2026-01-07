import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hky")
export default class HkyController {
  @operation({
    summary: "Get Hky",
  })
  @get()
  static getHky = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hky",
  })
  @post("{id}")
  static createHky = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
