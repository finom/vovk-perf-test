import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dfx")
export default class DfxController {
  @operation({
    summary: "Get Dfx",
  })
  @get()
  static getDfx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dfx",
  })
  @post("{id}")
  static createDfx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
