import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gkj")
export default class GkjController {
  @operation({
    summary: "Get Gkj",
  })
  @get()
  static getGkj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gkj",
  })
  @post("{id}")
  static createGkj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
