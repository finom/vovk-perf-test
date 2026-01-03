import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ts")
export default class TsController {
  @operation({
    summary: "Get Ts",
  })
  @get()
  static getTs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ts",
  })
  @post("{id}")
  static createTs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
