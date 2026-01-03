import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hdts")
export default class HdtController {
  @operation({
    summary: "Get Hdts",
  })
  @get()
  static getHdts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hdt",
  })
  @post("{id}")
  static createHdt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
