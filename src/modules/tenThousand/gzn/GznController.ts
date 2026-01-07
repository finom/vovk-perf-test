import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gzn")
export default class GznController {
  @operation({
    summary: "Get Gzn",
  })
  @get()
  static getGzn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gzn",
  })
  @post("{id}")
  static createGzn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
