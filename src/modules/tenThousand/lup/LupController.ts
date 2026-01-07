import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lup")
export default class LupController {
  @operation({
    summary: "Get Lup",
  })
  @get()
  static getLup = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lup",
  })
  @post("{id}")
  static createLup = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
