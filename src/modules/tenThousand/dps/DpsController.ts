import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dps")
export default class DpsController {
  @operation({
    summary: "Get Dps",
  })
  @get()
  static getDps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dps",
  })
  @post("{id}")
  static createDps = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
