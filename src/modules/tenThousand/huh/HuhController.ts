import { procedure, prefix, get, post, operation } from "vovk";

@prefix("huhs")
export default class HuhController {
  @operation({
    summary: "Get Huhs",
  })
  @get()
  static getHuhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Huh",
  })
  @post("{id}")
  static createHuh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
