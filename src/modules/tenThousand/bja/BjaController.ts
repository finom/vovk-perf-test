import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bja")
export default class BjaController {
  @operation({
    summary: "Get Bja",
  })
  @get()
  static getBja = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bja",
  })
  @post("{id}")
  static createBja = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
