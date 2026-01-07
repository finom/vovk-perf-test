import { procedure, prefix, get, post, operation } from "vovk";

@prefix("baf")
export default class BafController {
  @operation({
    summary: "Get Baf",
  })
  @get()
  static getBaf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Baf",
  })
  @post("{id}")
  static createBaf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
