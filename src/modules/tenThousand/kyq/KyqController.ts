import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kyq")
export default class KyqController {
  @operation({
    summary: "Get Kyq",
  })
  @get()
  static getKyq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kyq",
  })
  @post("{id}")
  static createKyq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
