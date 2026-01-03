import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lums")
export default class LumController {
  @operation({
    summary: "Get Lums",
  })
  @get()
  static getLums = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lum",
  })
  @post("{id}")
  static createLum = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
