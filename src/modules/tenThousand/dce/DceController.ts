import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dce")
export default class DceController {
  @operation({
    summary: "Get Dce",
  })
  @get()
  static getDce = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dce",
  })
  @post("{id}")
  static createDce = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
