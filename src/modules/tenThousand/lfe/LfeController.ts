import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lfes")
export default class LfeController {
  @operation({
    summary: "Get Lfes",
  })
  @get()
  static getLfes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lfe",
  })
  @post("{id}")
  static createLfe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
