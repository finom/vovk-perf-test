import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mbjs")
export default class MbjController {
  @operation({
    summary: "Get Mbjs",
  })
  @get()
  static getMbjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mbj",
  })
  @post("{id}")
  static createMbj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
