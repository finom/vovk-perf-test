import { procedure, prefix, get, post, operation } from "vovk";

@prefix("agg")
export default class AggController {
  @operation({
    summary: "Get Agg",
  })
  @get()
  static getAgg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Agg",
  })
  @post("{id}")
  static createAgg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
