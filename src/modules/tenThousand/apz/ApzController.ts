import { procedure, prefix, get, post, operation } from "vovk";

@prefix("apzs")
export default class ApzController {
  @operation({
    summary: "Get Apzs",
  })
  @get()
  static getApzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Apz",
  })
  @post("{id}")
  static createApz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
