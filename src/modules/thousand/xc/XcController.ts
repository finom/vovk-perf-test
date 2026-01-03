import { procedure, prefix, get, post, operation } from "vovk";

@prefix("xcs")
export default class XcController {
  @operation({
    summary: "Get Xcs",
  })
  @get()
  static getXcs = procedure({
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
