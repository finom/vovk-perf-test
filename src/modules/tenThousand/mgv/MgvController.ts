import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mgv")
export default class MgvController {
  @operation({
    summary: "Get Mgv",
  })
  @get()
  static getMgv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mgv",
  })
  @post("{id}")
  static createMgv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
