import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ior")
export default class IorController {
  @operation({
    summary: "Get Ior",
  })
  @get()
  static getIor = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ior",
  })
  @post("{id}")
  static createIor = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
