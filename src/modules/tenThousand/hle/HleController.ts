import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hle")
export default class HleController {
  @operation({
    summary: "Get Hle",
  })
  @get()
  static getHle = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hle",
  })
  @post("{id}")
  static createHle = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
