import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cge")
export default class CgeController {
  @operation({
    summary: "Get Cge",
  })
  @get()
  static getCge = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cge",
  })
  @post("{id}")
  static createCge = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
