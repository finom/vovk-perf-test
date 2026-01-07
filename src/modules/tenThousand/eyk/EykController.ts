import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eyk")
export default class EykController {
  @operation({
    summary: "Get Eyk",
  })
  @get()
  static getEyk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eyk",
  })
  @post("{id}")
  static createEyk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
