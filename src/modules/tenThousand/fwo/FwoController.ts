import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fwo")
export default class FwoController {
  @operation({
    summary: "Get Fwo",
  })
  @get()
  static getFwo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fwo",
  })
  @post("{id}")
  static createFwo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
