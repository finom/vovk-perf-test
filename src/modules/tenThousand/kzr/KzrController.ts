import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kzrs")
export default class KzrController {
  @operation({
    summary: "Get Kzrs",
  })
  @get()
  static getKzrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kzr",
  })
  @post("{id}")
  static createKzr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
