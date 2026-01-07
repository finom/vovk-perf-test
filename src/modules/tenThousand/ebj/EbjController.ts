import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ebj")
export default class EbjController {
  @operation({
    summary: "Get Ebj",
  })
  @get()
  static getEbj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ebj",
  })
  @post("{id}")
  static createEbj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
