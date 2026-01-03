import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kzs")
export default class KzController {
  @operation({
    summary: "Get Kzs",
  })
  @get()
  static getKzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kz",
  })
  @post("{id}")
  static createKz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
