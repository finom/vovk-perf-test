import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kews")
export default class KewController {
  @operation({
    summary: "Get Kews",
  })
  @get()
  static getKews = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kew",
  })
  @post("{id}")
  static createKew = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
