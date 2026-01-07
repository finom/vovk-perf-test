import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dre")
export default class DreController {
  @operation({
    summary: "Get Dre",
  })
  @get()
  static getDre = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dre",
  })
  @post("{id}")
  static createDre = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
