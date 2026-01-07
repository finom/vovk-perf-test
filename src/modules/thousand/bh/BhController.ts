import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bh")
export default class BhController {
  @operation({
    summary: "Get Bh",
  })
  @get()
  static getBh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bh",
  })
  @post("{id}")
  static createBh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
