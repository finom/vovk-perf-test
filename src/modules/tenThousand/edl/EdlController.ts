import { procedure, prefix, get, post, operation } from "vovk";

@prefix("edls")
export default class EdlController {
  @operation({
    summary: "Get Edls",
  })
  @get()
  static getEdls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Edl",
  })
  @post("{id}")
  static createEdl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
