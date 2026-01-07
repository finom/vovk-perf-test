import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iyj")
export default class IyjController {
  @operation({
    summary: "Get Iyj",
  })
  @get()
  static getIyj = procedure({
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
