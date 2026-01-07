import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gin")
export default class GinController {
  @operation({
    summary: "Get Gin",
  })
  @get()
  static getGin = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gin",
  })
  @post("{id}")
  static createGin = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
