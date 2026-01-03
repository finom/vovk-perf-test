import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ggls")
export default class GglController {
  @operation({
    summary: "Get Ggls",
  })
  @get()
  static getGgls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ggl",
  })
  @post("{id}")
  static createGgl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
