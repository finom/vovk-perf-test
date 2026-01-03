import { procedure, prefix, get, post, operation } from "vovk";

@prefix("pls")
export default class PlController {
  @operation({
    summary: "Get Pls",
  })
  @get()
  static getPls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Pl",
  })
  @post("{id}")
  static createPl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
