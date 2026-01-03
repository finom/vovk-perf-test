import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bkxes")
export default class BkxController {
  @operation({
    summary: "Get Bkxes",
  })
  @get()
  static getBkxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bkx",
  })
  @post("{id}")
  static createBkx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
