import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ntc")
export default class NtcController {
  @operation({
    summary: "Get Ntc",
  })
  @get()
  static getNtc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ntc",
  })
  @post("{id}")
  static createNtc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
