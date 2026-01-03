import { procedure, prefix, get, post, operation } from "vovk";

@prefix("xds")
export default class XdController {
  @operation({
    summary: "Get Xds",
  })
  @get()
  static getXds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Xd",
  })
  @post("{id}")
  static createXd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
