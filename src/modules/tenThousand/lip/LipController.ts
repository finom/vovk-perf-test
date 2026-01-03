import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lips")
export default class LipController {
  @operation({
    summary: "Get Lips",
  })
  @get()
  static getLips = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lip",
  })
  @post("{id}")
  static createLip = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
