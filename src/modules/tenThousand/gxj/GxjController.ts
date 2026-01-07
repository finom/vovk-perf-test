import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gxj")
export default class GxjController {
  @operation({
    summary: "Get Gxj",
  })
  @get()
  static getGxj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gxj",
  })
  @post("{id}")
  static createGxj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
