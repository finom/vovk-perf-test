import { procedure, prefix, get, post, operation } from "vovk";

@prefix("igr")
export default class IgrController {
  @operation({
    summary: "Get Igr",
  })
  @get()
  static getIgr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Igr",
  })
  @post("{id}")
  static createIgr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
