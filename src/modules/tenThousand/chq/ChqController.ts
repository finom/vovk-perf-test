import { procedure, prefix, get, post, operation } from "vovk";

@prefix("chqs")
export default class ChqController {
  @operation({
    summary: "Get Chqs",
  })
  @get()
  static getChqs = procedure({
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
