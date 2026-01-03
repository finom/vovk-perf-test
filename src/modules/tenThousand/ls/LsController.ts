import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ls")
export default class LsController {
  @operation({
    summary: "Get Ls",
  })
  @get()
  static getLs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ls",
  })
  @post("{id}")
  static createLs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
