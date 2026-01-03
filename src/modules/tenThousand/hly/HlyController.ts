import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hlies")
export default class HlyController {
  @operation({
    summary: "Get Hlies",
  })
  @get()
  static getHlies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hly",
  })
  @post("{id}")
  static createHly = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
