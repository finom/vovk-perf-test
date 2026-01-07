import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mik")
export default class MikController {
  @operation({
    summary: "Get Mik",
  })
  @get()
  static getMik = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mik",
  })
  @post("{id}")
  static createMik = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
