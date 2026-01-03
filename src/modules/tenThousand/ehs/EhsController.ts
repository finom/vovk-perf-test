import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ehs")
export default class EhsController {
  @operation({
    summary: "Get Ehs",
  })
  @get()
  static getEhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ehs",
  })
  @post("{id}")
  static createEhs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
