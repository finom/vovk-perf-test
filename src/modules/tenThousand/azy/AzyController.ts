import { procedure, prefix, get, post, operation } from "vovk";

@prefix("azy")
export default class AzyController {
  @operation({
    summary: "Get Azy",
  })
  @get()
  static getAzy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Azy",
  })
  @post("{id}")
  static createAzy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
