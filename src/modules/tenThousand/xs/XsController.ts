import { procedure, prefix, get, post, operation } from "vovk";

@prefix("xs")
export default class XsController {
  @operation({
    summary: "Get Xs",
  })
  @get()
  static getXs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Xs",
  })
  @post("{id}")
  static createXs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
