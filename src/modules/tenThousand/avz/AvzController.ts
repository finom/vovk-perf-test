import { procedure, prefix, get, post, operation } from "vovk";

@prefix("avzs")
export default class AvzController {
  @operation({
    summary: "Get Avzs",
  })
  @get()
  static getAvzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Avz",
  })
  @post("{id}")
  static createAvz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
