import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dea")
export default class DeaController {
  @operation({
    summary: "Get Dea",
  })
  @get()
  static getDea = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dea",
  })
  @post("{id}")
  static createDea = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
