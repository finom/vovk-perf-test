import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hmus")
export default class HmuController {
  @operation({
    summary: "Get Hmus",
  })
  @get()
  static getHmus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hmu",
  })
  @post("{id}")
  static createHmu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
