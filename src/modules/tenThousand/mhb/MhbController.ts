import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mhb")
export default class MhbController {
  @operation({
    summary: "Get Mhb",
  })
  @get()
  static getMhb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mhb",
  })
  @post("{id}")
  static createMhb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
