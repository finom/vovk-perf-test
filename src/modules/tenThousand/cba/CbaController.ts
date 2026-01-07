import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cba")
export default class CbaController {
  @operation({
    summary: "Get Cba",
  })
  @get()
  static getCba = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cba",
  })
  @post("{id}")
  static createCba = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
