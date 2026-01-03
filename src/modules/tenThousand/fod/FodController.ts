import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fods")
export default class FodController {
  @operation({
    summary: "Get Fods",
  })
  @get()
  static getFods = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fod",
  })
  @post("{id}")
  static createFod = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
