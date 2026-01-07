import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gcc")
export default class GccController {
  @operation({
    summary: "Get Gcc",
  })
  @get()
  static getGcc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gcc",
  })
  @post("{id}")
  static createGcc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
