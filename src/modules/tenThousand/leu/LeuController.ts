import { procedure, prefix, get, post, operation } from "vovk";

@prefix("leu")
export default class LeuController {
  @operation({
    summary: "Get Leu",
  })
  @get()
  static getLeu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Leu",
  })
  @post("{id}")
  static createLeu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
