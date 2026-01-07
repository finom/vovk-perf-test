import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ccl")
export default class CclController {
  @operation({
    summary: "Get Ccl",
  })
  @get()
  static getCcl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ccl",
  })
  @post("{id}")
  static createCcl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
