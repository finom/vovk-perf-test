import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aubs")
export default class AubController {
  @operation({
    summary: "Get Aubs",
  })
  @get()
  static getAubs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aub",
  })
  @post("{id}")
  static createAub = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
