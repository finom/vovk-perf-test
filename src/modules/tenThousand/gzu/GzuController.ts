import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gzu")
export default class GzuController {
  @operation({
    summary: "Get Gzu",
  })
  @get()
  static getGzu = procedure({
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
