import { procedure, prefix, get, post, operation } from "vovk";

@prefix("efs")
export default class EfsController {
  @operation({
    summary: "Get Efs",
  })
  @get()
  static getEfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Efs",
  })
  @post("{id}")
  static createEfs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
