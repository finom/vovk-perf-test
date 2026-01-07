import { procedure, prefix, get, post, operation } from "vovk";

@prefix("exx")
export default class ExxController {
  @operation({
    summary: "Get Exx",
  })
  @get()
  static getExx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Exx",
  })
  @post("{id}")
  static createExx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
