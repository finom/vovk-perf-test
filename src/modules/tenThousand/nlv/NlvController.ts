import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nlv")
export default class NlvController {
  @operation({
    summary: "Get Nlv",
  })
  @get()
  static getNlv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nlv",
  })
  @post("{id}")
  static createNlv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
