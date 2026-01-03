import { procedure, prefix, get, post, operation } from "vovk";

@prefix("exes")
export default class ExController {
  @operation({
    summary: "Get Exes",
  })
  @get()
  static getExes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ex",
  })
  @post("{id}")
  static createEx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
