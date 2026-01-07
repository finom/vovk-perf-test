import { procedure, prefix, get, post, operation } from "vovk";

@prefix("adj")
export default class AdjController {
  @operation({
    summary: "Get Adj",
  })
  @get()
  static getAdj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Adj",
  })
  @post("{id}")
  static createAdj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
