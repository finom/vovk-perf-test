import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cums")
export default class CumController {
  @operation({
    summary: "Get Cums",
  })
  @get()
  static getCums = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cum",
  })
  @post("{id}")
  static createCum = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
