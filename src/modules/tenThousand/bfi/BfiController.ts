import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bfis")
export default class BfiController {
  @operation({
    summary: "Get Bfis",
  })
  @get()
  static getBfis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bfi",
  })
  @post("{id}")
  static createBfi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
