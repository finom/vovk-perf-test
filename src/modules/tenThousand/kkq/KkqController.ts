import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kkq")
export default class KkqController {
  @operation({
    summary: "Get Kkq",
  })
  @get()
  static getKkq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kkq",
  })
  @post("{id}")
  static createKkq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
