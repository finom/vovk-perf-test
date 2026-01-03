import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eibs")
export default class EibController {
  @operation({
    summary: "Get Eibs",
  })
  @get()
  static getEibs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eib",
  })
  @post("{id}")
  static createEib = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
