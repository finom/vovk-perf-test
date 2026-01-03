import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ctds")
export default class CtdController {
  @operation({
    summary: "Get Ctds",
  })
  @get()
  static getCtds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ctd",
  })
  @post("{id}")
  static createCtd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
