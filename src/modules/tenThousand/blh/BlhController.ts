import { procedure, prefix, get, post, operation } from "vovk";

@prefix("blh")
export default class BlhController {
  @operation({
    summary: "Get Blh",
  })
  @get()
  static getBlh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Blh",
  })
  @post("{id}")
  static createBlh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
