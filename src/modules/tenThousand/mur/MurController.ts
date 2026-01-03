import { procedure, prefix, get, post, operation } from "vovk";

@prefix("murs")
export default class MurController {
  @operation({
    summary: "Get Murs",
  })
  @get()
  static getMurs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mur",
  })
  @post("{id}")
  static createMur = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
