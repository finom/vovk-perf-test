import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ubs")
export default class UbController {
  @operation({
    summary: "Get Ubs",
  })
  @get()
  static getUbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ub",
  })
  @post("{id}")
  static createUb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
