import { procedure, prefix, get, post, operation } from "vovk";

@prefix("laf")
export default class LafController {
  @operation({
    summary: "Get Laf",
  })
  @get()
  static getLaf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Laf",
  })
  @post("{id}")
  static createLaf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
