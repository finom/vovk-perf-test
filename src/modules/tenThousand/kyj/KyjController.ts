import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kyjs")
export default class KyjController {
  @operation({
    summary: "Get Kyjs",
  })
  @get()
  static getKyjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kyj",
  })
  @post("{id}")
  static createKyj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
