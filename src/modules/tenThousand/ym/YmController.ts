import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ym")
export default class YmController {
  @operation({
    summary: "Get Ym",
  })
  @get()
  static getYm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ym",
  })
  @post("{id}")
  static createYm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
