import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dhl")
export default class DhlController {
  @operation({
    summary: "Get Dhl",
  })
  @get()
  static getDhl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dhl",
  })
  @post("{id}")
  static createDhl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
