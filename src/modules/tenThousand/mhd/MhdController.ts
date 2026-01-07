import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mhd")
export default class MhdController {
  @operation({
    summary: "Get Mhd",
  })
  @get()
  static getMhd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mhd",
  })
  @post("{id}")
  static createMhd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
