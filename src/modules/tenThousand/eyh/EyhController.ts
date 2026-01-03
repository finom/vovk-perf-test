import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eyhs")
export default class EyhController {
  @operation({
    summary: "Get Eyhs",
  })
  @get()
  static getEyhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eyh",
  })
  @post("{id}")
  static createEyh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
