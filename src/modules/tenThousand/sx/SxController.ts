import { procedure, prefix, get, post, operation } from "vovk";

@prefix("sxes")
export default class SxController {
  @operation({
    summary: "Get Sxes",
  })
  @get()
  static getSxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Sx",
  })
  @post("{id}")
  static createSx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
