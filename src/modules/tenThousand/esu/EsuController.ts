import { procedure, prefix, get, post, operation } from "vovk";

@prefix("esu")
export default class EsuController {
  @operation({
    summary: "Get Esu",
  })
  @get()
  static getEsu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Esu",
  })
  @post("{id}")
  static createEsu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
