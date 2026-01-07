import { procedure, prefix, get, post, operation } from "vovk";

@prefix("avg")
export default class AvgController {
  @operation({
    summary: "Get Avg",
  })
  @get()
  static getAvg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Avg",
  })
  @post("{id}")
  static createAvg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
