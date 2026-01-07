import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mtg")
export default class MtgController {
  @operation({
    summary: "Get Mtg",
  })
  @get()
  static getMtg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mtg",
  })
  @post("{id}")
  static createMtg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
