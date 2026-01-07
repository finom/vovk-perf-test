import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gge")
export default class GgeController {
  @operation({
    summary: "Get Gge",
  })
  @get()
  static getGge = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gge",
  })
  @post("{id}")
  static createGge = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
