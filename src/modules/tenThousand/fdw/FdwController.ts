import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fdws")
export default class FdwController {
  @operation({
    summary: "Get Fdws",
  })
  @get()
  static getFdws = procedure({
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
