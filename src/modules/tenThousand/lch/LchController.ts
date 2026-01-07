import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lch")
export default class LchController {
  @operation({
    summary: "Get Lch",
  })
  @get()
  static getLch = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lch",
  })
  @post("{id}")
  static createLch = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
