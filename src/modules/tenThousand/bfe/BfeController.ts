import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bfes")
export default class BfeController {
  @operation({
    summary: "Get Bfes",
  })
  @get()
  static getBfes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bfe",
  })
  @post("{id}")
  static createBfe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
