import { procedure, prefix, get, post, operation } from "vovk";

@prefix("apt")
export default class AptController {
  @operation({
    summary: "Get Apt",
  })
  @get()
  static getApt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Apt",
  })
  @post("{id}")
  static createApt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
