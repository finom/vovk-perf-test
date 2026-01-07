import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nlw")
export default class NlwController {
  @operation({
    summary: "Get Nlw",
  })
  @get()
  static getNlw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nlw",
  })
  @post("{id}")
  static createNlw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
