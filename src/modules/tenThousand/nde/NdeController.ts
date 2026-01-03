import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ndes")
export default class NdeController {
  @operation({
    summary: "Get Ndes",
  })
  @get()
  static getNdes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nde",
  })
  @post("{id}")
  static createNde = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
