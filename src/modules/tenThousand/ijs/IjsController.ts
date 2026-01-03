import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ijs")
export default class IjsController {
  @operation({
    summary: "Get Ijs",
  })
  @get()
  static getIjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ijs",
  })
  @post("{id}")
  static createIjs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
