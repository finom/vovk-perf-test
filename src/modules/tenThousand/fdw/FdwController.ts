import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fdw")
export default class FdwController {
  @operation({
    summary: "Get Fdw",
  })
  @get()
  static getFdw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fdw",
  })
  @post("{id}")
  static createFdw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
