import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bvis")
export default class BviController {
  @operation({
    summary: "Get Bvis",
  })
  @get()
  static getBvis = procedure({
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
