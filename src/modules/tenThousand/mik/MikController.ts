import { procedure, prefix, get, post, operation } from "vovk";

@prefix("miks")
export default class MikController {
  @operation({
    summary: "Get Miks",
  })
  @get()
  static getMiks = procedure({
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
