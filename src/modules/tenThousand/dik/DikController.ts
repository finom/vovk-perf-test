import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dik")
export default class DikController {
  @operation({
    summary: "Get Dik",
  })
  @get()
  static getDik = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dik",
  })
  @post("{id}")
  static createDik = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
