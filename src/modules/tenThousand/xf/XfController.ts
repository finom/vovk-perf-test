import { procedure, prefix, get, post, operation } from "vovk";

@prefix("xfs")
export default class XfController {
  @operation({
    summary: "Get Xfs",
  })
  @get()
  static getXfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Xf",
  })
  @post("{id}")
  static createXf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
