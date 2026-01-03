import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hwies")
export default class HwyController {
  @operation({
    summary: "Get Hwies",
  })
  @get()
  static getHwies = procedure({
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
