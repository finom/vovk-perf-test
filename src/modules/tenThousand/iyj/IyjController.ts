import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iyjs")
export default class IyjController {
  @operation({
    summary: "Get Iyjs",
  })
  @get()
  static getIyjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iyj",
  })
  @post("{id}")
  static createIyj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
