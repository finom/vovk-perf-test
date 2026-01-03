import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cls")
export default class ClsController {
  @operation({
    summary: "Get Cls",
  })
  @get()
  static getCls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cls",
  })
  @post("{id}")
  static createCls = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
