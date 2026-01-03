import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fzms")
export default class FzmController {
  @operation({
    summary: "Get Fzms",
  })
  @get()
  static getFzms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fzm",
  })
  @post("{id}")
  static createFzm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
