import { procedure, prefix, get, post, operation } from "vovk";

@prefix("drf")
export default class DrfController {
  @operation({
    summary: "Get Drf",
  })
  @get()
  static getDrf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Drf",
  })
  @post("{id}")
  static createDrf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
