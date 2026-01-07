import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ewi")
export default class EwiController {
  @operation({
    summary: "Get Ewi",
  })
  @get()
  static getEwi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ewi",
  })
  @post("{id}")
  static createEwi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
