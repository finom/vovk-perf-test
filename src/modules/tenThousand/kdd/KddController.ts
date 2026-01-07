import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kdd")
export default class KddController {
  @operation({
    summary: "Get Kdd",
  })
  @get()
  static getKdd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kdd",
  })
  @post("{id}")
  static createKdd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
