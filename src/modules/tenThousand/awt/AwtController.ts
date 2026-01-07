import { procedure, prefix, get, post, operation } from "vovk";

@prefix("awt")
export default class AwtController {
  @operation({
    summary: "Get Awt",
  })
  @get()
  static getAwt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Awt",
  })
  @post("{id}")
  static createAwt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
