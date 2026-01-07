import { procedure, prefix, get, post, operation } from "vovk";

@prefix("biy")
export default class BiyController {
  @operation({
    summary: "Get Biy",
  })
  @get()
  static getBiy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Biy",
  })
  @post("{id}")
  static createBiy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
