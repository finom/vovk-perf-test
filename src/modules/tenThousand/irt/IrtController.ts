import { procedure, prefix, get, post, operation } from "vovk";

@prefix("irts")
export default class IrtController {
  @operation({
    summary: "Get Irts",
  })
  @get()
  static getIrts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Irt",
  })
  @post("{id}")
  static createIrt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
