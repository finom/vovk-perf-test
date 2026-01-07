import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ewv")
export default class EwvController {
  @operation({
    summary: "Get Ewv",
  })
  @get()
  static getEwv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ewv",
  })
  @post("{id}")
  static createEwv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
