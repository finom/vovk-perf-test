import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bxf")
export default class BxfController {
  @operation({
    summary: "Get Bxf",
  })
  @get()
  static getBxf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bxf",
  })
  @post("{id}")
  static createBxf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
