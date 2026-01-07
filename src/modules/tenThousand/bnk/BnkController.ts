import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bnk")
export default class BnkController {
  @operation({
    summary: "Get Bnk",
  })
  @get()
  static getBnk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bnk",
  })
  @post("{id}")
  static createBnk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
