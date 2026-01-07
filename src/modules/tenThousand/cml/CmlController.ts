import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cml")
export default class CmlController {
  @operation({
    summary: "Get Cml",
  })
  @get()
  static getCml = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cml",
  })
  @post("{id}")
  static createCml = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
