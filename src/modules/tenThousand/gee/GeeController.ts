import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gee")
export default class GeeController {
  @operation({
    summary: "Get Gee",
  })
  @get()
  static getGee = procedure({
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
