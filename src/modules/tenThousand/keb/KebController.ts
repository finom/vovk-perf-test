import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kebs")
export default class KebController {
  @operation({
    summary: "Get Kebs",
  })
  @get()
  static getKebs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Keb",
  })
  @post("{id}")
  static createKeb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
