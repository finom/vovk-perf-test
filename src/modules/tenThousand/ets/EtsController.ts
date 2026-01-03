import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ets")
export default class EtsController {
  @operation({
    summary: "Get Ets",
  })
  @get()
  static getEts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ets",
  })
  @post("{id}")
  static createEts = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
