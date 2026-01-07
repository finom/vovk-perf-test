import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aea")
export default class AeaController {
  @operation({
    summary: "Get Aea",
  })
  @get()
  static getAea = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aea",
  })
  @post("{id}")
  static createAea = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
