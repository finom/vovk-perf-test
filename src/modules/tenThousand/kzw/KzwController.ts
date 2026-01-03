import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kzws")
export default class KzwController {
  @operation({
    summary: "Get Kzws",
  })
  @get()
  static getKzws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kzw",
  })
  @post("{id}")
  static createKzw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
