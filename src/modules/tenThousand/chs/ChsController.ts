import { procedure, prefix, get, post, operation } from "vovk";

@prefix("chs")
export default class ChsController {
  @operation({
    summary: "Get Chs",
  })
  @get()
  static getChs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Chs",
  })
  @post("{id}")
  static createChs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
