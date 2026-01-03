import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cixes")
export default class CixController {
  @operation({
    summary: "Get Cixes",
  })
  @get()
  static getCixes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cix",
  })
  @post("{id}")
  static createCix = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
