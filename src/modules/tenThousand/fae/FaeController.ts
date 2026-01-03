import { procedure, prefix, get, post, operation } from "vovk";

@prefix("faes")
export default class FaeController {
  @operation({
    summary: "Get Faes",
  })
  @get()
  static getFaes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fae",
  })
  @post("{id}")
  static createFae = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
