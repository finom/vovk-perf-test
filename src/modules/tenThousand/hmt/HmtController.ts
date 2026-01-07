import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hmt")
export default class HmtController {
  @operation({
    summary: "Get Hmt",
  })
  @get()
  static getHmt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hmt",
  })
  @post("{id}")
  static createHmt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
