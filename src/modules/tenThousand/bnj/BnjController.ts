import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bnjs")
export default class BnjController {
  @operation({
    summary: "Get Bnjs",
  })
  @get()
  static getBnjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bnj",
  })
  @post("{id}")
  static createBnj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
