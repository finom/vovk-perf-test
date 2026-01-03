import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gzus")
export default class GzuController {
  @operation({
    summary: "Get Gzus",
  })
  @get()
  static getGzus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gzu",
  })
  @post("{id}")
  static createGzu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
