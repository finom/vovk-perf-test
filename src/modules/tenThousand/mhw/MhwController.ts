import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mhw")
export default class MhwController {
  @operation({
    summary: "Get Mhw",
  })
  @get()
  static getMhw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mhw",
  })
  @post("{id}")
  static createMhw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
