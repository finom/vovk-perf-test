import { procedure, prefix, get, post, operation } from "vovk";

@prefix("xd")
export default class XdController {
  @operation({
    summary: "Get Xd",
  })
  @get()
  static getXd = procedure({
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
