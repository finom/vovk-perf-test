import { procedure, prefix, get, post, operation } from "vovk";

@prefix("arw")
export default class ArwController {
  @operation({
    summary: "Get Arw",
  })
  @get()
  static getArw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Arw",
  })
  @post("{id}")
  static createArw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
