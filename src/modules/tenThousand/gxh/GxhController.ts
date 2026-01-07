import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gxh")
export default class GxhController {
  @operation({
    summary: "Get Gxh",
  })
  @get()
  static getGxh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gxh",
  })
  @post("{id}")
  static createGxh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
