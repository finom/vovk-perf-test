import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hly")
export default class HlyController {
  @operation({
    summary: "Get Hly",
  })
  @get()
  static getHly = procedure({
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
