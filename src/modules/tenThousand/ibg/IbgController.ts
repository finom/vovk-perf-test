import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ibgs")
export default class IbgController {
  @operation({
    summary: "Get Ibgs",
  })
  @get()
  static getIbgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ibg",
  })
  @post("{id}")
  static createIbg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
