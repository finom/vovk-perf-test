import { procedure, prefix, get, post, operation } from "vovk";

@prefix("imd")
export default class ImdController {
  @operation({
    summary: "Get Imd",
  })
  @get()
  static getImd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Imd",
  })
  @post("{id}")
  static createImd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
