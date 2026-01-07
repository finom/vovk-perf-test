import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kqu")
export default class KquController {
  @operation({
    summary: "Get Kqu",
  })
  @get()
  static getKqu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kqu",
  })
  @post("{id}")
  static createKqu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
