import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mhds")
export default class MhdController {
  @operation({
    summary: "Get Mhds",
  })
  @get()
  static getMhds = procedure({
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
