import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mhp")
export default class MhpController {
  @operation({
    summary: "Get Mhp",
  })
  @get()
  static getMhp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mhp",
  })
  @post("{id}")
  static createMhp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
