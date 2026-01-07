import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eib")
export default class EibController {
  @operation({
    summary: "Get Eib",
  })
  @get()
  static getEib = procedure({
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
