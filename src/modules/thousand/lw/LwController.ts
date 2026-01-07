import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lw")
export default class LwController {
  @operation({
    summary: "Get Lw",
  })
  @get()
  static getLw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lw",
  })
  @post("{id}")
  static createLw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
