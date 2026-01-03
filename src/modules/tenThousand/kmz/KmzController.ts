import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kmzs")
export default class KmzController {
  @operation({
    summary: "Get Kmzs",
  })
  @get()
  static getKmzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kmz",
  })
  @post("{id}")
  static createKmz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
