import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fvy")
export default class FvyController {
  @operation({
    summary: "Get Fvy",
  })
  @get()
  static getFvy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fvy",
  })
  @post("{id}")
  static createFvy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
