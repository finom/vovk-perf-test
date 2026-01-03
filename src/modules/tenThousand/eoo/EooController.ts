import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eoos")
export default class EooController {
  @operation({
    summary: "Get Eoos",
  })
  @get()
  static getEoos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eoo",
  })
  @post("{id}")
  static createEoo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
