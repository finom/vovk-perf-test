import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bils")
export default class BilController {
  @operation({
    summary: "Get Bils",
  })
  @get()
  static getBils = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bil",
  })
  @post("{id}")
  static createBil = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
