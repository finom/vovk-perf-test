import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ltcs")
export default class LtcController {
  @operation({
    summary: "Get Ltcs",
  })
  @get()
  static getLtcs = procedure({
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
