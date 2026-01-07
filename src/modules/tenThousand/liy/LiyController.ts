import { procedure, prefix, get, post, operation } from "vovk";

@prefix("liy")
export default class LiyController {
  @operation({
    summary: "Get Liy",
  })
  @get()
  static getLiy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Liy",
  })
  @post("{id}")
  static createLiy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
