import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nle")
export default class NleController {
  @operation({
    summary: "Get Nle",
  })
  @get()
  static getNle = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nle",
  })
  @post("{id}")
  static createNle = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
