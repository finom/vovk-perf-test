import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lens")
export default class LenController {
  @operation({
    summary: "Get Lens",
  })
  @get()
  static getLens = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Len",
  })
  @post("{id}")
  static createLen = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
