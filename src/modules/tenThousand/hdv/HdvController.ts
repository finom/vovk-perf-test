import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hdvs")
export default class HdvController {
  @operation({
    summary: "Get Hdvs",
  })
  @get()
  static getHdvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hdv",
  })
  @post("{id}")
  static createHdv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
