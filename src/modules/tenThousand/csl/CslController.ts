import { procedure, prefix, get, post, operation } from "vovk";

@prefix("csl")
export default class CslController {
  @operation({
    summary: "Get Csl",
  })
  @get()
  static getCsl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Csl",
  })
  @post("{id}")
  static createCsl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
