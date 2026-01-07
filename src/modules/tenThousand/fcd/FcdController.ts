import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fcd")
export default class FcdController {
  @operation({
    summary: "Get Fcd",
  })
  @get()
  static getFcd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fcd",
  })
  @post("{id}")
  static createFcd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
