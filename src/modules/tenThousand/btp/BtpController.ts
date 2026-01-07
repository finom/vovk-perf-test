import { procedure, prefix, get, post, operation } from "vovk";

@prefix("btp")
export default class BtpController {
  @operation({
    summary: "Get Btp",
  })
  @get()
  static getBtp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Btp",
  })
  @post("{id}")
  static createBtp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
