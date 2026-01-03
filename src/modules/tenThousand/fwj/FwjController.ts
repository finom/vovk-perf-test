import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fwjs")
export default class FwjController {
  @operation({
    summary: "Get Fwjs",
  })
  @get()
  static getFwjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fwj",
  })
  @post("{id}")
  static createFwj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
