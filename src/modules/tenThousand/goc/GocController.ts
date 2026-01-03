import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gocs")
export default class GocController {
  @operation({
    summary: "Get Gocs",
  })
  @get()
  static getGocs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Goc",
  })
  @post("{id}")
  static createGoc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
