import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bmw")
export default class BmwController {
  @operation({
    summary: "Get Bmw",
  })
  @get()
  static getBmw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bmw",
  })
  @post("{id}")
  static createBmw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
