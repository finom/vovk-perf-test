import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iwcs")
export default class IwcController {
  @operation({
    summary: "Get Iwcs",
  })
  @get()
  static getIwcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iwc",
  })
  @post("{id}")
  static createIwc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
