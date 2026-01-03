import { procedure, prefix, get, post, operation } from "vovk";

@prefix("isks")
export default class IskController {
  @operation({
    summary: "Get Isks",
  })
  @get()
  static getIsks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Isk",
  })
  @post("{id}")
  static createIsk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
