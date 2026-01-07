import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bdg")
export default class BdgController {
  @operation({
    summary: "Get Bdg",
  })
  @get()
  static getBdg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bdg",
  })
  @post("{id}")
  static createBdg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
