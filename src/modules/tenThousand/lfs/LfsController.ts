import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lfs")
export default class LfsController {
  @operation({
    summary: "Get Lfs",
  })
  @get()
  static getLfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lfs",
  })
  @post("{id}")
  static createLfs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
