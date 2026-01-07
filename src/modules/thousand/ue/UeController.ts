import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ue")
export default class UeController {
  @operation({
    summary: "Get Ue",
  })
  @get()
  static getUe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ue",
  })
  @post("{id}")
  static createUe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
