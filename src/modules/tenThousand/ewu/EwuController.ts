import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ewus")
export default class EwuController {
  @operation({
    summary: "Get Ewus",
  })
  @get()
  static getEwus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ewu",
  })
  @post("{id}")
  static createEwu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
