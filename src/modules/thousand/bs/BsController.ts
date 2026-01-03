import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bs")
export default class BsController {
  @operation({
    summary: "Get Bs",
  })
  @get()
  static getBs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bs",
  })
  @post("{id}")
  static createBs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
