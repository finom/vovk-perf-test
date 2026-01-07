import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gei")
export default class GeiController {
  @operation({
    summary: "Get Gei",
  })
  @get()
  static getGei = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gei",
  })
  @post("{id}")
  static createGei = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
