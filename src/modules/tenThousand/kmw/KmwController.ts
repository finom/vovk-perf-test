import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kmws")
export default class KmwController {
  @operation({
    summary: "Get Kmws",
  })
  @get()
  static getKmws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kmw",
  })
  @post("{id}")
  static createKmw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
