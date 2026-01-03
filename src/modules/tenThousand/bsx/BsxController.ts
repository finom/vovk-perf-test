import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bsxes")
export default class BsxController {
  @operation({
    summary: "Get Bsxes",
  })
  @get()
  static getBsxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bsx",
  })
  @post("{id}")
  static createBsx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
