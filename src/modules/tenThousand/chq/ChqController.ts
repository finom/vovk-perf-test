import { procedure, prefix, get, post, operation } from "vovk";

@prefix("chq")
export default class ChqController {
  @operation({
    summary: "Get Chq",
  })
  @get()
  static getChq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Chq",
  })
  @post("{id}")
  static createChq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
