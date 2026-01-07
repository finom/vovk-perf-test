import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ehq")
export default class EhqController {
  @operation({
    summary: "Get Ehq",
  })
  @get()
  static getEhq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ehq",
  })
  @post("{id}")
  static createEhq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
