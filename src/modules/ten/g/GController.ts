import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gs")
export default class GController {
  @operation({
    summary: "Get GS",
  })
  @get()
  static getGS = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create G",
  })
  @post("{id}")
  static createG = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
