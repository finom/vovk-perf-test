import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aei")
export default class AeiController {
  @operation({
    summary: "Get Aei",
  })
  @get()
  static getAei = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aei",
  })
  @post("{id}")
  static createAei = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
