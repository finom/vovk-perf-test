import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bll")
export default class BllController {
  @operation({
    summary: "Get Bll",
  })
  @get()
  static getBll = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bll",
  })
  @post("{id}")
  static createBll = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
