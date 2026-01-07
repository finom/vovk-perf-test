import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hei")
export default class HeiController {
  @operation({
    summary: "Get Hei",
  })
  @get()
  static getHei = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hei",
  })
  @post("{id}")
  static createHei = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
