import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mhi")
export default class MhiController {
  @operation({
    summary: "Get Mhi",
  })
  @get()
  static getMhi = procedure({
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
