import { procedure, prefix, get, post, operation } from "vovk";

@prefix("men")
export default class MenController {
  @operation({
    summary: "Get Men",
  })
  @get()
  static getMen = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Men",
  })
  @post("{id}")
  static createMen = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
