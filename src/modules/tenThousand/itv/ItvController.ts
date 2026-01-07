import { procedure, prefix, get, post, operation } from "vovk";

@prefix("itv")
export default class ItvController {
  @operation({
    summary: "Get Itv",
  })
  @get()
  static getItv = procedure({
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
