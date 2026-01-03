import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bvms")
export default class BvmController {
  @operation({
    summary: "Get Bvms",
  })
  @get()
  static getBvms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bvm",
  })
  @post("{id}")
  static createBvm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
