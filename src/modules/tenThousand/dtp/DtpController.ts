import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dtps")
export default class DtpController {
  @operation({
    summary: "Get Dtps",
  })
  @get()
  static getDtps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dtp",
  })
  @post("{id}")
  static createDtp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
