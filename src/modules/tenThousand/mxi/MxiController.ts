import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mxis")
export default class MxiController {
  @operation({
    summary: "Get Mxis",
  })
  @get()
  static getMxis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mxi",
  })
  @post("{id}")
  static createMxi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
