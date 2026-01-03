import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fdgs")
export default class FdgController {
  @operation({
    summary: "Get Fdgs",
  })
  @get()
  static getFdgs = procedure({
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
