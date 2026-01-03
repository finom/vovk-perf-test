import { procedure, prefix, get, post, operation } from "vovk";

@prefix("chzs")
export default class ChzController {
  @operation({
    summary: "Get Chzs",
  })
  @get()
  static getChzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Chz",
  })
  @post("{id}")
  static createChz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
