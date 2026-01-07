import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bnx")
export default class BnxController {
  @operation({
    summary: "Get Bnx",
  })
  @get()
  static getBnx = procedure({
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
