import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mhms")
export default class MhmController {
  @operation({
    summary: "Get Mhms",
  })
  @get()
  static getMhms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mhm",
  })
  @post("{id}")
  static createMhm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
