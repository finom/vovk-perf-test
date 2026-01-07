import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gfr")
export default class GfrController {
  @operation({
    summary: "Get Gfr",
  })
  @get()
  static getGfr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gfr",
  })
  @post("{id}")
  static createGfr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
