import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ct")
export default class CtController {
  @operation({
    summary: "Get Ct",
  })
  @get()
  static getCt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ct",
  })
  @post("{id}")
  static createCt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
