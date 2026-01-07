import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kyj")
export default class KyjController {
  @operation({
    summary: "Get Kyj",
  })
  @get()
  static getKyj = procedure({
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
