import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dces")
export default class DceController {
  @operation({
    summary: "Get Dces",
  })
  @get()
  static getDces = procedure({
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
