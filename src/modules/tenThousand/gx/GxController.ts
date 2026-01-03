import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gxes")
export default class GxController {
  @operation({
    summary: "Get Gxes",
  })
  @get()
  static getGxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gx",
  })
  @post("{id}")
  static createGx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
