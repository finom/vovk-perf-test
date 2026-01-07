import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jei")
export default class JeiController {
  @operation({
    summary: "Get Jei",
  })
  @get()
  static getJei = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jei",
  })
  @post("{id}")
  static createJei = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
