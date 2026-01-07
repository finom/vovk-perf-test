import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kyi")
export default class KyiController {
  @operation({
    summary: "Get Kyi",
  })
  @get()
  static getKyi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kyi",
  })
  @post("{id}")
  static createKyi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
