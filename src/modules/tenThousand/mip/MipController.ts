import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mip")
export default class MipController {
  @operation({
    summary: "Get Mip",
  })
  @get()
  static getMip = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mip",
  })
  @post("{id}")
  static createMip = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
