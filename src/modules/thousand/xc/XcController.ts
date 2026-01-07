import { procedure, prefix, get, post, operation } from "vovk";

@prefix("xc")
export default class XcController {
  @operation({
    summary: "Get Xc",
  })
  @get()
  static getXc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Xc",
  })
  @post("{id}")
  static createXc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
