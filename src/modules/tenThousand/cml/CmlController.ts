import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cmls")
export default class CmlController {
  @operation({
    summary: "Get Cmls",
  })
  @get()
  static getCmls = procedure({
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
