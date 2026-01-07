import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cgh")
export default class CghController {
  @operation({
    summary: "Get Cgh",
  })
  @get()
  static getCgh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cgh",
  })
  @post("{id}")
  static createCgh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
