import { procedure, prefix, get, post, operation } from "vovk";

@prefix("exy")
export default class ExyController {
  @operation({
    summary: "Get Exy",
  })
  @get()
  static getExy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Exy",
  })
  @post("{id}")
  static createExy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
