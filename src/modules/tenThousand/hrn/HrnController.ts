import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hrns")
export default class HrnController {
  @operation({
    summary: "Get Hrns",
  })
  @get()
  static getHrns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hrn",
  })
  @post("{id}")
  static createHrn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
