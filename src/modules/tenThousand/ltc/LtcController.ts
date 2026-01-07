import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ltc")
export default class LtcController {
  @operation({
    summary: "Get Ltc",
  })
  @get()
  static getLtc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ltc",
  })
  @post("{id}")
  static createLtc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
