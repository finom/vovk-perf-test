import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ffes")
export default class FfeController {
  @operation({
    summary: "Get Ffes",
  })
  @get()
  static getFfes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ffe",
  })
  @post("{id}")
  static createFfe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
