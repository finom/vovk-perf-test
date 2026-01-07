import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fdg")
export default class FdgController {
  @operation({
    summary: "Get Fdg",
  })
  @get()
  static getFdg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fdg",
  })
  @post("{id}")
  static createFdg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
