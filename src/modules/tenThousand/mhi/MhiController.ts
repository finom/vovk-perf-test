import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mhis")
export default class MhiController {
  @operation({
    summary: "Get Mhis",
  })
  @get()
  static getMhis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mhi",
  })
  @post("{id}")
  static createMhi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
