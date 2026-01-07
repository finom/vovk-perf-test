import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gtr")
export default class GtrController {
  @operation({
    summary: "Get Gtr",
  })
  @get()
  static getGtr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gtr",
  })
  @post("{id}")
  static createGtr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
