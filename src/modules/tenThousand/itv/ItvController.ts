import { procedure, prefix, get, post, operation } from "vovk";

@prefix("itvs")
export default class ItvController {
  @operation({
    summary: "Get Itvs",
  })
  @get()
  static getItvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Itv",
  })
  @post("{id}")
  static createItv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
