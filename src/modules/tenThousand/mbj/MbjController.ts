import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mbj")
export default class MbjController {
  @operation({
    summary: "Get Mbj",
  })
  @get()
  static getMbj = procedure({
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
