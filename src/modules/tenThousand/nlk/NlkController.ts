import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nlks")
export default class NlkController {
  @operation({
    summary: "Get Nlks",
  })
  @get()
  static getNlks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nlk",
  })
  @post("{id}")
  static createNlk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
