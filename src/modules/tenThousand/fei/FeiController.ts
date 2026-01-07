import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fei")
export default class FeiController {
  @operation({
    summary: "Get Fei",
  })
  @get()
  static getFei = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fei",
  })
  @post("{id}")
  static createFei = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
