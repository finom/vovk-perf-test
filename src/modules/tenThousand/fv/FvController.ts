import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fv")
export default class FvController {
  @operation({
    summary: "Get Fv",
  })
  @get()
  static getFv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fv",
  })
  @post("{id}")
  static createFv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
