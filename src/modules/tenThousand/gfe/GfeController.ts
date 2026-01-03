import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gfes")
export default class GfeController {
  @operation({
    summary: "Get Gfes",
  })
  @get()
  static getGfes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gfe",
  })
  @post("{id}")
  static createGfe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
