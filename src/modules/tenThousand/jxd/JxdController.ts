import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jxds")
export default class JxdController {
  @operation({
    summary: "Get Jxds",
  })
  @get()
  static getJxds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jxd",
  })
  @post("{id}")
  static createJxd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
