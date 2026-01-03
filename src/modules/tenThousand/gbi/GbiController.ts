import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gbis")
export default class GbiController {
  @operation({
    summary: "Get Gbis",
  })
  @get()
  static getGbis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gbi",
  })
  @post("{id}")
  static createGbi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
