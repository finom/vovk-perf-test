import { procedure, prefix, get, post, operation } from "vovk";

@prefix("pr")
export default class PrController {
  @operation({
    summary: "Get Pr",
  })
  @get()
  static getPr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Pr",
  })
  @post("{id}")
  static createPr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
