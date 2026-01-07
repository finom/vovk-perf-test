import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ewl")
export default class EwlController {
  @operation({
    summary: "Get Ewl",
  })
  @get()
  static getEwl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ewl",
  })
  @post("{id}")
  static createEwl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
