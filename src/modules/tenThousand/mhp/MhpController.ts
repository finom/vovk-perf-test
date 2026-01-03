import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mhps")
export default class MhpController {
  @operation({
    summary: "Get Mhps",
  })
  @get()
  static getMhps = procedure({
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
