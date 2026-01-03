import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dzvs")
export default class DzvController {
  @operation({
    summary: "Get Dzvs",
  })
  @get()
  static getDzvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dzv",
  })
  @post("{id}")
  static createDzv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
