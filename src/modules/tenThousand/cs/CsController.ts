import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cs")
export default class CsController {
  @operation({
    summary: "Get Cs",
  })
  @get()
  static getCs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cs",
  })
  @post("{id}")
  static createCs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
