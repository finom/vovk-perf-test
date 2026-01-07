import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jmt")
export default class JmtController {
  @operation({
    summary: "Get Jmt",
  })
  @get()
  static getJmt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jmt",
  })
  @post("{id}")
  static createJmt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
