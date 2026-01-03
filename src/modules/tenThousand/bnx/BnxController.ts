import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bnxes")
export default class BnxController {
  @operation({
    summary: "Get Bnxes",
  })
  @get()
  static getBnxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bnx",
  })
  @post("{id}")
  static createBnx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
