import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kzh")
export default class KzhController {
  @operation({
    summary: "Get Kzh",
  })
  @get()
  static getKzh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kzh",
  })
  @post("{id}")
  static createKzh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
