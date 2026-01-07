import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eun")
export default class EunController {
  @operation({
    summary: "Get Eun",
  })
  @get()
  static getEun = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eun",
  })
  @post("{id}")
  static createEun = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
