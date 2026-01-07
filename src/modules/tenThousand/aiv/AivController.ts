import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aiv")
export default class AivController {
  @operation({
    summary: "Get Aiv",
  })
  @get()
  static getAiv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aiv",
  })
  @post("{id}")
  static createAiv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
