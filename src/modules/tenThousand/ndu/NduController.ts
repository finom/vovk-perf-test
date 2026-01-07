import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ndu")
export default class NduController {
  @operation({
    summary: "Get Ndu",
  })
  @get()
  static getNdu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ndu",
  })
  @post("{id}")
  static createNdu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
