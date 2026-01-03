import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gzqs")
export default class GzqController {
  @operation({
    summary: "Get Gzqs",
  })
  @get()
  static getGzqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gzq",
  })
  @post("{id}")
  static createGzq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
