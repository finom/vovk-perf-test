import { procedure, prefix, get, post, operation } from "vovk";

@prefix("avz")
export default class AvzController {
  @operation({
    summary: "Get Avz",
  })
  @get()
  static getAvz = procedure({
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
