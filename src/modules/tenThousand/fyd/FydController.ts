import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fyds")
export default class FydController {
  @operation({
    summary: "Get Fyds",
  })
  @get()
  static getFyds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fyd",
  })
  @post("{id}")
  static createFyd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
