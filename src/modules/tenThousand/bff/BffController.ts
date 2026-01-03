import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bffs")
export default class BffController {
  @operation({
    summary: "Get Bffs",
  })
  @get()
  static getBffs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bff",
  })
  @post("{id}")
  static createBff = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
