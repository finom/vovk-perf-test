import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mets")
export default class MetController {
  @operation({
    summary: "Get Mets",
  })
  @get()
  static getMets = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Met",
  })
  @post("{id}")
  static createMet = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
