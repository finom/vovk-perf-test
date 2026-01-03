import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eyjs")
export default class EyjController {
  @operation({
    summary: "Get Eyjs",
  })
  @get()
  static getEyjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eyj",
  })
  @post("{id}")
  static createEyj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
