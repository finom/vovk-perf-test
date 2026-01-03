import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ntps")
export default class NtpController {
  @operation({
    summary: "Get Ntps",
  })
  @get()
  static getNtps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ntp",
  })
  @post("{id}")
  static createNtp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
