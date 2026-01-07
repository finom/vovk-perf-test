import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ffe")
export default class FfeController {
  @operation({
    summary: "Get Ffe",
  })
  @get()
  static getFfe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ffe",
  })
  @post("{id}")
  static createFfe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
