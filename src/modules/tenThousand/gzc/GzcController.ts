import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gzcs")
export default class GzcController {
  @operation({
    summary: "Get Gzcs",
  })
  @get()
  static getGzcs = procedure({
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
