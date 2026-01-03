import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kyws")
export default class KywController {
  @operation({
    summary: "Get Kyws",
  })
  @get()
  static getKyws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kyw",
  })
  @post("{id}")
  static createKyw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
