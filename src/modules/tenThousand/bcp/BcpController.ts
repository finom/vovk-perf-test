import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bcp")
export default class BcpController {
  @operation({
    summary: "Get Bcp",
  })
  @get()
  static getBcp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bcp",
  })
  @post("{id}")
  static createBcp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
