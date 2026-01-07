import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ibg")
export default class IbgController {
  @operation({
    summary: "Get Ibg",
  })
  @get()
  static getIbg = procedure({
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
