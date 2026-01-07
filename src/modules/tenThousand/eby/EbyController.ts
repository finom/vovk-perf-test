import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eby")
export default class EbyController {
  @operation({
    summary: "Get Eby",
  })
  @get()
  static getEby = procedure({
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
