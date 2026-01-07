import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mel")
export default class MelController {
  @operation({
    summary: "Get Mel",
  })
  @get()
  static getMel = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mel",
  })
  @post("{id}")
  static createMel = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
