import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cof")
export default class CofController {
  @operation({
    summary: "Get Cof",
  })
  @get()
  static getCof = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cof",
  })
  @post("{id}")
  static createCof = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
