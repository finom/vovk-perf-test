import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bxcs")
export default class BxcController {
  @operation({
    summary: "Get Bxcs",
  })
  @get()
  static getBxcs = procedure({
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
