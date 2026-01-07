import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dwa")
export default class DwaController {
  @operation({
    summary: "Get Dwa",
  })
  @get()
  static getDwa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dwa",
  })
  @post("{id}")
  static createDwa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
