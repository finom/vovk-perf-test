import { procedure, prefix, get, post, operation } from "vovk";

@prefix("akh")
export default class AkhController {
  @operation({
    summary: "Get Akh",
  })
  @get()
  static getAkh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Akh",
  })
  @post("{id}")
  static createAkh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
