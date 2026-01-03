import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fens")
export default class FenController {
  @operation({
    summary: "Get Fens",
  })
  @get()
  static getFens = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fen",
  })
  @post("{id}")
  static createFen = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
