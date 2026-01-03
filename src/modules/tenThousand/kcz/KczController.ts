import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kczs")
export default class KczController {
  @operation({
    summary: "Get Kczs",
  })
  @get()
  static getKczs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kcz",
  })
  @post("{id}")
  static createKcz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
