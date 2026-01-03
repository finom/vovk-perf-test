import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eugs")
export default class EugController {
  @operation({
    summary: "Get Eugs",
  })
  @get()
  static getEugs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eug",
  })
  @post("{id}")
  static createEug = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
