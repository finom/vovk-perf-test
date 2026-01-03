import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kyus")
export default class KyuController {
  @operation({
    summary: "Get Kyus",
  })
  @get()
  static getKyus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kyu",
  })
  @post("{id}")
  static createKyu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
