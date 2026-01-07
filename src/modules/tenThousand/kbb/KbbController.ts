import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kbb")
export default class KbbController {
  @operation({
    summary: "Get Kbb",
  })
  @get()
  static getKbb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kbb",
  })
  @post("{id}")
  static createKbb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
