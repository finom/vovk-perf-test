import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iges")
export default class IgeController {
  @operation({
    summary: "Get Iges",
  })
  @get()
  static getIges = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ige",
  })
  @post("{id}")
  static createIge = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
