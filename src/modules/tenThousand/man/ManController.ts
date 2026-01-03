import { procedure, prefix, get, post, operation } from "vovk";

@prefix("men")
export default class ManController {
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
    summary: "Create Man",
  })
  @post("{id}")
  static createMan = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
