import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hyjs")
export default class HyjController {
  @operation({
    summary: "Get Hyjs",
  })
  @get()
  static getHyjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hyj",
  })
  @post("{id}")
  static createHyj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
