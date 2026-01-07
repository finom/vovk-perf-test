import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gxb")
export default class GxbController {
  @operation({
    summary: "Get Gxb",
  })
  @get()
  static getGxb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gxb",
  })
  @post("{id}")
  static createGxb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
