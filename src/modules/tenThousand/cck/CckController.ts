import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ccks")
export default class CckController {
  @operation({
    summary: "Get Ccks",
  })
  @get()
  static getCcks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cck",
  })
  @post("{id}")
  static createCck = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
