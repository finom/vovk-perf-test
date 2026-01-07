import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mhh")
export default class MhhController {
  @operation({
    summary: "Get Mhh",
  })
  @get()
  static getMhh = procedure({
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
