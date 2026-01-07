import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bik")
export default class BikController {
  @operation({
    summary: "Get Bik",
  })
  @get()
  static getBik = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bik",
  })
  @post("{id}")
  static createBik = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
