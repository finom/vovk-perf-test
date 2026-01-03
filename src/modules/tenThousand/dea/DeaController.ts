import { procedure, prefix, get, post, operation } from "vovk";

@prefix("deas")
export default class DeaController {
  @operation({
    summary: "Get Deas",
  })
  @get()
  static getDeas = procedure({
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
