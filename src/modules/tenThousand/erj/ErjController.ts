import { procedure, prefix, get, post, operation } from "vovk";

@prefix("erjs")
export default class ErjController {
  @operation({
    summary: "Get Erjs",
  })
  @get()
  static getErjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Erj",
  })
  @post("{id}")
  static createErj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
