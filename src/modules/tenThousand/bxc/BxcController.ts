import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bxc")
export default class BxcController {
  @operation({
    summary: "Get Bxc",
  })
  @get()
  static getBxc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bxc",
  })
  @post("{id}")
  static createBxc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
