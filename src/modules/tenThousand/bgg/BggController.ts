import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bgg")
export default class BggController {
  @operation({
    summary: "Get Bgg",
  })
  @get()
  static getBgg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bgg",
  })
  @post("{id}")
  static createBgg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
