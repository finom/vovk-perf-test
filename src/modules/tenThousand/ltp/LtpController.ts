import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ltp")
export default class LtpController {
  @operation({
    summary: "Get Ltp",
  })
  @get()
  static getLtp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ltp",
  })
  @post("{id}")
  static createLtp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
