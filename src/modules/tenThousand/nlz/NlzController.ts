import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nlzs")
export default class NlzController {
  @operation({
    summary: "Get Nlzs",
  })
  @get()
  static getNlzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nlz",
  })
  @post("{id}")
  static createNlz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
