import { procedure, prefix, get, post, operation } from "vovk";

@prefix("sls")
export default class SlController {
  @operation({
    summary: "Get Sls",
  })
  @get()
  static getSls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Sl",
  })
  @post("{id}")
  static createSl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
