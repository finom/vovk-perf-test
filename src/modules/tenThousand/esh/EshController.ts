import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eshes")
export default class EshController {
  @operation({
    summary: "Get Eshes",
  })
  @get()
  static getEshes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Esh",
  })
  @post("{id}")
  static createEsh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
