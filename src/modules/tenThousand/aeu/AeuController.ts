import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aeu")
export default class AeuController {
  @operation({
    summary: "Get Aeu",
  })
  @get()
  static getAeu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aeu",
  })
  @post("{id}")
  static createAeu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
