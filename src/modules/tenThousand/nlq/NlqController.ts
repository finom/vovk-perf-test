import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nlq")
export default class NlqController {
  @operation({
    summary: "Get Nlq",
  })
  @get()
  static getNlq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nlq",
  })
  @post("{id}")
  static createNlq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
