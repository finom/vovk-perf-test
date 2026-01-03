import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fsjs")
export default class FsjController {
  @operation({
    summary: "Get Fsjs",
  })
  @get()
  static getFsjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fsj",
  })
  @post("{id}")
  static createFsj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
