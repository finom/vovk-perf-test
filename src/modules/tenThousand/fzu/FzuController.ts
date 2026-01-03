import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fzus")
export default class FzuController {
  @operation({
    summary: "Get Fzus",
  })
  @get()
  static getFzus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fzu",
  })
  @post("{id}")
  static createFzu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
