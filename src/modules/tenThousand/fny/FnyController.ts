import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fny")
export default class FnyController {
  @operation({
    summary: "Get Fny",
  })
  @get()
  static getFny = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fny",
  })
  @post("{id}")
  static createFny = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
