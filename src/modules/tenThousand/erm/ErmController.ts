import { procedure, prefix, get, post, operation } from "vovk";

@prefix("erms")
export default class ErmController {
  @operation({
    summary: "Get Erms",
  })
  @get()
  static getErms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Erm",
  })
  @post("{id}")
  static createErm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
