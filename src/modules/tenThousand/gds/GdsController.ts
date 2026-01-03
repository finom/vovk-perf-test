import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gds")
export default class GdsController {
  @operation({
    summary: "Get Gds",
  })
  @get()
  static getGds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gds",
  })
  @post("{id}")
  static createGds = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
