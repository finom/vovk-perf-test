import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fdv")
export default class FdvController {
  @operation({
    summary: "Get Fdv",
  })
  @get()
  static getFdv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fdv",
  })
  @post("{id}")
  static createFdv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
