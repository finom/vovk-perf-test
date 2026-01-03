import { procedure, prefix, get, post, operation } from "vovk";

@prefix("arws")
export default class ArwController {
  @operation({
    summary: "Get Arws",
  })
  @get()
  static getArws = procedure({
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
