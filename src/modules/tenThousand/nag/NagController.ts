import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nag")
export default class NagController {
  @operation({
    summary: "Get Nag",
  })
  @get()
  static getNag = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nag",
  })
  @post("{id}")
  static createNag = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
