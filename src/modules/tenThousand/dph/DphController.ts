import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dph")
export default class DphController {
  @operation({
    summary: "Get Dph",
  })
  @get()
  static getDph = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dph",
  })
  @post("{id}")
  static createDph = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
