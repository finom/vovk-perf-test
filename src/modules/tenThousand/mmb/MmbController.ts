import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mmb")
export default class MmbController {
  @operation({
    summary: "Get Mmb",
  })
  @get()
  static getMmb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mmb",
  })
  @post("{id}")
  static createMmb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
