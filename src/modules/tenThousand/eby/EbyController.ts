import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ebies")
export default class EbyController {
  @operation({
    summary: "Get Ebies",
  })
  @get()
  static getEbies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eby",
  })
  @post("{id}")
  static createEby = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
