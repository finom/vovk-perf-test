import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kkus")
export default class KkuController {
  @operation({
    summary: "Get Kkus",
  })
  @get()
  static getKkus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kku",
  })
  @post("{id}")
  static createKku = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
