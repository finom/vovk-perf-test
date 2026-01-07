import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cgo")
export default class CgoController {
  @operation({
    summary: "Get Cgo",
  })
  @get()
  static getCgo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cgo",
  })
  @post("{id}")
  static createCgo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
