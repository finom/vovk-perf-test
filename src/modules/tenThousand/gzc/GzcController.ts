import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gzc")
export default class GzcController {
  @operation({
    summary: "Get Gzc",
  })
  @get()
  static getGzc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gzc",
  })
  @post("{id}")
  static createGzc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
