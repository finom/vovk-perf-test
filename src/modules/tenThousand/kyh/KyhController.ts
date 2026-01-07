import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kyh")
export default class KyhController {
  @operation({
    summary: "Get Kyh",
  })
  @get()
  static getKyh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kyh",
  })
  @post("{id}")
  static createKyh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
