import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ly")
export default class LyController {
  @operation({
    summary: "Get Ly",
  })
  @get()
  static getLy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ly",
  })
  @post("{id}")
  static createLy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
