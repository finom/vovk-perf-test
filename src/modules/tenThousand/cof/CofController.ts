import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cofs")
export default class CofController {
  @operation({
    summary: "Get Cofs",
  })
  @get()
  static getCofs = procedure({
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
