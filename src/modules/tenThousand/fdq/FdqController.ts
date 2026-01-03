import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fdqs")
export default class FdqController {
  @operation({
    summary: "Get Fdqs",
  })
  @get()
  static getFdqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fdq",
  })
  @post("{id}")
  static createFdq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
