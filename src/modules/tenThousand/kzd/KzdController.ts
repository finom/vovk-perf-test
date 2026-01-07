import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kzd")
export default class KzdController {
  @operation({
    summary: "Get Kzd",
  })
  @get()
  static getKzd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kzd",
  })
  @post("{id}")
  static createKzd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
