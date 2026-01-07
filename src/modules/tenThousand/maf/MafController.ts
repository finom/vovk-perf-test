import { procedure, prefix, get, post, operation } from "vovk";

@prefix("maf")
export default class MafController {
  @operation({
    summary: "Get Maf",
  })
  @get()
  static getMaf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Maf",
  })
  @post("{id}")
  static createMaf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
