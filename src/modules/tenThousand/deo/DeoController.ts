import { procedure, prefix, get, post, operation } from "vovk";

@prefix("deos")
export default class DeoController {
  @operation({
    summary: "Get Deos",
  })
  @get()
  static getDeos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Deo",
  })
  @post("{id}")
  static createDeo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
