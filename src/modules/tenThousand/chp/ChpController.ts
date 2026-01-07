import { procedure, prefix, get, post, operation } from "vovk";

@prefix("chp")
export default class ChpController {
  @operation({
    summary: "Get Chp",
  })
  @get()
  static getChp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Chp",
  })
  @post("{id}")
  static createChp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
