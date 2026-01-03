import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lies")
export default class LyController {
  @operation({
    summary: "Get Lies",
  })
  @get()
  static getLies = procedure({
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
