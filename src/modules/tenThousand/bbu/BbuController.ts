import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bbus")
export default class BbuController {
  @operation({
    summary: "Get Bbus",
  })
  @get()
  static getBbus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bbu",
  })
  @post("{id}")
  static createBbu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
