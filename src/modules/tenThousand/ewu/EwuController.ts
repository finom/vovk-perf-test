import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ewu")
export default class EwuController {
  @operation({
    summary: "Get Ewu",
  })
  @get()
  static getEwu = procedure({
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
