import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mhhs")
export default class MhhController {
  @operation({
    summary: "Get Mhhs",
  })
  @get()
  static getMhhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mhh",
  })
  @post("{id}")
  static createMhh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
