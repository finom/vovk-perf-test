import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fczs")
export default class FczController {
  @operation({
    summary: "Get Fczs",
  })
  @get()
  static getFczs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fcz",
  })
  @post("{id}")
  static createFcz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
