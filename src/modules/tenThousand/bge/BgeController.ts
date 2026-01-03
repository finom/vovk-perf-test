import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bges")
export default class BgeController {
  @operation({
    summary: "Get Bges",
  })
  @get()
  static getBges = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bge",
  })
  @post("{id}")
  static createBge = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
