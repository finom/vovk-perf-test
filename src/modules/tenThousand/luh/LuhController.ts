import { procedure, prefix, get, post, operation } from "vovk";

@prefix("luhs")
export default class LuhController {
  @operation({
    summary: "Get Luhs",
  })
  @get()
  static getLuhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Luh",
  })
  @post("{id}")
  static createLuh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
