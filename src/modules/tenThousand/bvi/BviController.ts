import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bvi")
export default class BviController {
  @operation({
    summary: "Get Bvi",
  })
  @get()
  static getBvi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bvi",
  })
  @post("{id}")
  static createBvi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
