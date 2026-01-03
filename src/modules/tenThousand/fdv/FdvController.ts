import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fdvs")
export default class FdvController {
  @operation({
    summary: "Get Fdvs",
  })
  @get()
  static getFdvs = procedure({
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
