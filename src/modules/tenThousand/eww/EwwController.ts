import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eww")
export default class EwwController {
  @operation({
    summary: "Get Eww",
  })
  @get()
  static getEww = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eww",
  })
  @post("{id}")
  static createEww = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
