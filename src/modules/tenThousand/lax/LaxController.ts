import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lax")
export default class LaxController {
  @operation({
    summary: "Get Lax",
  })
  @get()
  static getLax = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lax",
  })
  @post("{id}")
  static createLax = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
