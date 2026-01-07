import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hwy")
export default class HwyController {
  @operation({
    summary: "Get Hwy",
  })
  @get()
  static getHwy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hwy",
  })
  @post("{id}")
  static createHwy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
