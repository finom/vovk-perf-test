import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nlrs")
export default class NlrController {
  @operation({
    summary: "Get Nlrs",
  })
  @get()
  static getNlrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nlr",
  })
  @post("{id}")
  static createNlr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
