import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ddo")
export default class DdoController {
  @operation({
    summary: "Get Ddo",
  })
  @get()
  static getDdo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ddo",
  })
  @post("{id}")
  static createDdo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
