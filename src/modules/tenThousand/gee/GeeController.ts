import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gees")
export default class GeeController {
  @operation({
    summary: "Get Gees",
  })
  @get()
  static getGees = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gee",
  })
  @post("{id}")
  static createGee = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
