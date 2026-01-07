import { procedure, prefix, get, post, operation } from "vovk";

@prefix("brd")
export default class BrdController {
  @operation({
    summary: "Get Brd",
  })
  @get()
  static getBrd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Brd",
  })
  @post("{id}")
  static createBrd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
