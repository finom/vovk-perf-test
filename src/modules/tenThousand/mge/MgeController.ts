import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mge")
export default class MgeController {
  @operation({
    summary: "Get Mge",
  })
  @get()
  static getMge = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mge",
  })
  @post("{id}")
  static createMge = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
